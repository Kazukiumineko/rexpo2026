"use client";

import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import { usePathname } from 'next/navigation';


interface BackgroundVideoProps {
    overlayOpacity: number;
    onLoaded?: () => void;
}

export default function BackgroundVideo({ overlayOpacity, onLoaded }: BackgroundVideoProps) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [showFallbackImage, setShowFallbackImage] = useState(false);
    // Start with mountVideo false to prevent bandwidth contention with Loading Logo (RmarkRED.png)
    const [mountVideo, setMountVideo] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const isPlayingRef = useRef(false);

    // Delay video mounting to prioritize Loading Image and UI
    useEffect(() => {
        const timer = setTimeout(() => {
            setMountVideo(true);
        }, 2500); // Wait 2.5s before starting heavy video download
        return () => clearTimeout(timer);
    }, []);

    // Check if video is already playing on mount (for hydration edge cases)
    useEffect(() => {
        const video = videoRef.current;
        // readyState >= 3 (HAVE_FUTURE_DATA) means we have enough data to play at least a bit
        if (video && !video.paused && video.readyState >= 3) {
            setIsVideoPlaying(true);
            isPlayingRef.current = true;
            if (onLoaded) onLoaded();
        }
    }, []);

    // Mobile specific loop logic: Loop at 8 seconds (Only if using the long video)
    useEffect(() => {
        // If video is not mounted, we can't attach listeners
        if (!mountVideo) return;

        // We need to wait for ref to be populated after mountVideo becomes true
        const video = videoRef.current;
        if (!video) return;

        const handleMobileLoop = () => {
            if (window.innerWidth < 768) {
                // Only enforce manual loop if the video is long (fallback to PC video)
                // If a short mobile video is loaded (< 10s), let the native loop attribute handle it.
                if (video.duration > 10 && video.currentTime >= 8) {
                    video.currentTime = 0;
                    video.play().catch(() => { });
                }
            }
        };

        video.addEventListener('timeupdate', handleMobileLoop);
        return () => video.removeEventListener('timeupdate', handleMobileLoop);
    }, [mountVideo]); // Re-run when video is remounted

    // Fallback: If video doesn't play in 8s, switch to image and unmount video
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isPlayingRef.current) {
                setShowFallbackImage(true);
                setMountVideo(false); // Unmount video to stop loading/processing

                // If we fallback, force load completion (assuming image is ready or will be soon)
                // This covers the case where image loaded BEFORE the timeout.
                if (onLoaded) onLoaded();
            }
        }, 8000);
        return () => clearTimeout(timer);
    }, []);

    const pathname = usePathname();

    // Reload logic: Retry 10s after fallback mode is triggered, but only if on homepage
    // If user navigates away, this timer clears (prioritizing new page load).
    // When they return to homepage, timer restarts, ensuring we only load video when bandwidth is likely free.
    useEffect(() => {
        if (!showFallbackImage) return;

        // Only load video when on homepage
        if (pathname !== "/") return;

        const timer = setTimeout(() => {
            // Remount video to start loading again. 
            setMountVideo(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, [showFallbackImage, pathname]);

    return (
        <>
            <div className={`absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-1000 ${showFallbackImage ? 'z-0' : '-z-10'}`} />

            <Image
                src="/mobile.png"
                alt="Mobile Background"
                fill
                priority
                className={`object-cover transition-opacity duration-1000 ${showFallbackImage ? 'opacity-30 z-10' : 'opacity-0 -z-20'}`}
                onLoad={() => {
                    // Update loaded state only if falling back to image
                    // Wait for video mount attempt (2.5s) before allowing image to dismiss loading
                    if (mountVideo && showFallbackImage && onLoaded) {
                        onLoaded();
                    }
                }}
            />

            {mountVideo && (
                <video
                    ref={videoRef}
                    className={`absolute top-0 left-0 w-full h-full object-cover bg-black transition-opacity duration-1000 ${showFallbackImage ? 'opacity-0' : 'opacity-100'}`}
                    // poster removed to prevent "Loading -> Poster -> Video" flicker
                    autoPlay
                    loop
                    muted
                    playsInline
                    onPlaying={() => {
                        setIsVideoPlaying(true);
                        isPlayingRef.current = true;
                        setShowFallbackImage(false); // Hide image once video plays

                        // Add slight delay to ensure video is actually rendering frames before removing loading screen
                        if (onLoaded) {
                            setTimeout(() => {
                                onLoaded();
                            }, 200);
                        }
                    }}
                >
                    {/* Mobile optimized video (Please upload Drone_mobile.mp4) */}
                    <source src="/Drone_mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
                    <source src="/Drone.mp4" type="video/mp4" />
                </video>
            )}

            <div
                className="absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-100 ease-linear pointer-events-none"
                style={{ opacity: overlayOpacity }}
            />
        </>
    );
}
