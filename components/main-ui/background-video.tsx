"use client";

import { useState, useRef, useEffect } from 'react';


interface BackgroundVideoProps {
    overlayOpacity: number;
    onLoaded?: () => void;
}

export default function BackgroundVideo({ overlayOpacity, onLoaded }: BackgroundVideoProps) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [showFallbackImage, setShowFallbackImage] = useState(false);
    const [mountVideo, setMountVideo] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const isPlayingRef = useRef(false);

    // Check if video is already playing on mount (for hydration edge cases)
    useEffect(() => {
        const video = videoRef.current;
        if (video && !video.paused) {
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
                // Do NOT call onLoaded here; wait for image to load
            }
        }, 8000);
        return () => clearTimeout(timer);
    }, []);

    // Reload logic: If user stays for 40s, try loading the video again
    useEffect(() => {
        const timer = setTimeout(() => {
            // Remount video to start loading again. 
            // The image will stay visible until the video actually starts playing (onPlay).
            setMountVideo(true);
        }, 15000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className={`absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-1000 ${showFallbackImage ? 'z-0' : '-z-10'}`} />

            <img
                src="/mobile.png"
                alt="Mobile Background"
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${showFallbackImage ? 'opacity-30 z-10' : 'opacity-0 -z-20'}`}
                onLoad={() => {
                    // Update loaded state only if falling back to image
                    if (showFallbackImage && onLoaded) onLoaded();
                }}
            />

            {mountVideo && (
                <video
                    ref={videoRef}
                    className={`absolute top-0 left-0 w-full h-full object-cover bg-black transition-opacity duration-1000 ${showFallbackImage ? 'opacity-0' : 'opacity-100'}`}
                    poster="/mobile.png"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onPlay={() => {
                        setIsVideoPlaying(true);
                        isPlayingRef.current = true;
                        setShowFallbackImage(false); // Hide image once video plays
                        if (onLoaded) onLoaded();
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
