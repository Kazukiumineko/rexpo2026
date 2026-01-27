"use client";

import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import { usePathname } from 'next/navigation';


interface BackgroundVideoProps {
    overlayOpacity: number;
    onLoaded?: () => void;
}

export default function BackgroundVideo({ overlayOpacity, onLoaded }: BackgroundVideoProps) {
    // State to track load status
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    // Controls what is shown
    const [showFallbackImage, setShowFallbackImage] = useState(false); // Try video first (false)
    const [mountVideo, setMountVideo] = useState(true); // Mount video immediately

    const videoRef = useRef<HTMLVideoElement>(null);
    const isPlayingRef = useRef(false);
    const hasLoadedRef = useRef(false); // To prevent double firing of onLoaded

    const pathname = usePathname();

    // Helper to safely call onLoaded once
    const triggerLoaded = () => {
        if (!hasLoadedRef.current) {
            hasLoadedRef.current = true;
            if (onLoaded) onLoaded();
        }
    };

    // 1. Mount Logic: Start video immediately.
    // 2. Timeout Logic (3s): If video isn't playing by 3s, switch to fallback.
    useEffect(() => {
        const timer = setTimeout(() => {
            // If video is not playing yet
            if (!isPlayingRef.current) {
                // Switch to fallback mode
                setShowFallbackImage(true);
                setMountVideo(false); // Stop video loading to save bandwidth

                // Check if image is ready to show
                if (isImageLoaded) {
                    triggerLoaded();
                }
                // If image is NOT ready, we wait. 
                // The parent PersistentBackgroundVideo has a 6s hard stop which handles the case where image never loads.
                // Or if image loads later, handleImageLoad will trigger it.
            }
        }, 3000); // 3 seconds timeout

        return () => clearTimeout(timer);
    }, [isImageLoaded]); // Re-evaluate if image loads status changes, though mainly timer driven based on ref


    // Handle Image Load
    const handleImageLoad = () => {
        setIsImageLoaded(true);
        // If we are ALREADY in fallback mode (e.g. video failed or timed out before image loaded),
        // then we can trigger finish now.
        if (showFallbackImage) {
            triggerLoaded();
        }
    };

    // Handle Video Play
    const handleVideoPlay = () => {
        // If we already gave up on video (timeout), ignore late play
        if (showFallbackImage) return;

        setIsVideoPlaying(true);
        isPlayingRef.current = true;
        // Video wins!
        triggerLoaded();
    };


    // Mobile Loop Logic (Preserved)
    useEffect(() => {
        if (!mountVideo) return;
        const video = videoRef.current;
        if (!video) return;

        const handleMobileLoop = () => {
            if (window.innerWidth < 768) {
                if (video.duration > 10 && video.currentTime >= 8) {
                    video.currentTime = 0;
                    video.play().catch(() => { });
                }
            }
        };

        video.addEventListener('timeupdate', handleMobileLoop);
        return () => video.removeEventListener('timeupdate', handleMobileLoop);
    }, [mountVideo]);


    // Reload/Re-mount logic (Simplified from original)
    // If we are on subpages, we might unmount video to save resources.
    // If we return to home, we might try again?
    // For now, sticking to the simple logic: If homepage, keep it as determined by the initial sequence.
    useEffect(() => {
        if (pathname !== "/") {
            setMountVideo(false);
        } else {
            // Returning to home:
            // Since this component might not unmount between page transitions in App Router depending on layout,
            // we check if we should try video again?
            // The requirement says "3s timeout", usually for initial load.
            // Let's decide to KEEP whatever state we ended up in (video or image) to avoid re-loading lag,
            // UNLESS user wants fresh retry.
            // But if we unmounted video due to subpage, we should restore it if it WAS playing?
            // For simplicity/stability: if we were playing video, remount it. If fallback, stay fallback.
            if (isPlayingRef.current && !showFallbackImage) {
                setMountVideo(true);
            }
        }
    }, [pathname]);

    return (
        <>
            {/* Background Black Fade Layer */}
            <div className={`absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-1000 ${showFallbackImage || isVideoPlaying ? 'z-0' : 'z-20'}`} />

            {/* Fallback Image */}
            <Image
                src="/mobile.png"
                alt="Mobile Background"
                fill
                priority={false} // Load after critical sequence if possible, but modern browsers parallelize
                className={`object-cover transition-opacity duration-1000 ${showFallbackImage ? 'opacity-30 z-10' : 'opacity-0 -z-20'}`}
                onLoad={handleImageLoad}
            />

            {/* Video */}
            {mountVideo && (
                <video
                    ref={videoRef}
                    className={`absolute top-0 left-0 w-full h-full object-cover bg-black transition-opacity duration-1000 ${showFallbackImage ? 'opacity-0' : 'opacity-100'}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    onPlaying={handleVideoPlay}
                >
                    <source src="/Drone_mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
                    <source src="/Drone.mp4" type="video/mp4" />
                </video>
            )}

            {/* Overlay */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-100 ease-linear pointer-events-none"
                style={{ opacity: overlayOpacity }}
            />
        </>
    );
}
