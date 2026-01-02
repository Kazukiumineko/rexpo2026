"use client";


interface BackgroundVideoProps {
    overlayOpacity: number;
}

export default function BackgroundVideo({ overlayOpacity }: BackgroundVideoProps) {
    return (
        <>
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
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
