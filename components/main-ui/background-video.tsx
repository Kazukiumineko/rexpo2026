"use client";

import { useState, useRef, useEffect } from 'react';


interface BackgroundVideoProps {
    overlayOpacity: number;
    onLoaded?: () => void;
}

export default function BackgroundVideo({ overlayOpacity, onLoaded }: BackgroundVideoProps) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [showFallback, setShowFallback] = useState(false);
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
    }, []);

    // Mobile fallback: If video doesn't play in 8s, switch to image
    useEffect(() => {
        const timer = setTimeout(() => {
            const isMobile = window.innerWidth < 768;
            if (isMobile && !isPlayingRef.current) {
                setShowFallback(true);
                // Do NOT call onLoaded here; wait for image to load
            }
        }, 8000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showFallback ? (
                <img
                    src="/mobile.png"
                    alt="Mobile Background"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    onLoad={() => {
                        if (onLoaded) onLoaded();
                    }}
                />
            ) : (
                <video
                    ref={videoRef}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onPlay={() => {
                        setIsVideoPlaying(true);
                        isPlayingRef.current = true;
                        if (onLoaded) onLoaded();
                    }}
                >
                    {/* Mobile optimized video (Please upload Drone_mobile.mp4) */}
                    <source src="/Drone_mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
                    <source src="/Drone.mp4" type="video/mp4" />
                </video>
            )}

            <div
                className="absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-100 ease-linear"
                style={{ opacity: overlayOpacity }}
            />
        </>
    );
}
