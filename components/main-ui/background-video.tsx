"use client";

import { useState, useRef, useEffect } from 'react';


interface BackgroundVideoProps {
    overlayOpacity: number;
    onLoaded?: () => void;
}

export default function BackgroundVideo({ overlayOpacity, onLoaded }: BackgroundVideoProps) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleLoaded = () => {
        if (!hasLoaded) {
            setHasLoaded(true);
            if (onLoaded) onLoaded();
        }
    };

    // Check if video is already playing on mount (for hydration edge cases)
    useEffect(() => {
        const video = videoRef.current;
        if (video && !video.paused) {
            setIsVideoPlaying(true);
            handleLoaded();
        }
    }, []);

    // Optimization: Show home screen when 1/2 of the video is buffered
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const checkProgress = () => {
            if (hasLoaded) return;

            // Check if metadata is loaded to get duration
            if (video.readyState >= 1 && video.duration > 0) {
                const targetDuration = video.duration / 2;

                if (video.buffered.length > 0) {
                    const bufferedEnd = video.buffered.end(video.buffered.length - 1);
                    // Ensure we have buffered enough (1/2 duration) and have data to render
                    if (bufferedEnd >= targetDuration && video.readyState >= 2) {
                        handleLoaded();
                    }
                }
            }
            // Fallback for mobile if metadata is slow (using heuristic of 4s)
            else if (window.innerWidth < 768) {
                if (video.buffered.length > 0) {
                    const bufferedEnd = video.buffered.end(video.buffered.length - 1);
                    if (bufferedEnd >= 4 && video.readyState >= 2) {
                        handleLoaded();
                    }
                }
            }
        };

        video.addEventListener('progress', checkProgress);
        video.addEventListener('timeupdate', checkProgress);
        video.addEventListener('loadedmetadata', checkProgress);

        return () => {
            video.removeEventListener('progress', checkProgress);
            video.removeEventListener('timeupdate', checkProgress);
            video.removeEventListener('loadedmetadata', checkProgress);
        };
    }, [hasLoaded]);

    return (
        <>
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                onPlay={() => {
                    setIsVideoPlaying(true);
                    handleLoaded();
                }}
            >
                <source src="/Drone.mp4" type="video/mp4" />
            </video>

            <div
                className="absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-100 ease-linear"
                style={{ opacity: overlayOpacity }}
            />
        </>
    );
}
