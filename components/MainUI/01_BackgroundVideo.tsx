"use client";

import { useState } from 'react';


interface BackgroundVideoProps {
    overlayOpacity: number;
    onLoaded?: () => void;
}

export default function BackgroundVideo({ overlayOpacity, onLoaded }: BackgroundVideoProps) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    // Check if video is already playing on mount (for hydration edge cases)
    const handleVideoRef = (video: HTMLVideoElement | null) => {
        if (video && !video.paused) {
            setIsVideoPlaying(true);
            if (onLoaded) onLoaded();
        }
    };

    return (
        <>
            <video
                ref={handleVideoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                onPlay={() => {
                    setIsVideoPlaying(true);
                    if (onLoaded) onLoaded();
                }}
            >
                <source src="/Drone.webm" type="video/webm" />
                <source src="/Drone.mp4" type="video/mp4" />
            </video>

            <div
                className="absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-100 ease-linear"
                style={{ opacity: overlayOpacity }}
            />
        </>
    );
}
