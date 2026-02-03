"use client";

import LazyImage from "@/components/shared/lazy-image";

interface ResponsiveImageProps {
    pcSrc: string;
    mobileSrc: string;
    alt: string;
    className?: string;
    fill?: boolean;
    priority?: boolean;
}

export default function ResponsiveImage({
    pcSrc,
    mobileSrc,
    alt,
    className = "",
    fill = false,
    priority = false,
}: ResponsiveImageProps) {
    return (
        <div className={`relative w-full h-full ${className}`}>
            {/* PC Image (Hidden on mobile) */}
            <div className="hidden md:block w-full h-full relative">
                <LazyImage
                    src={pcSrc}
                    alt={alt}
                    fill={fill}
                    priority={priority}
                    className="object-cover"
                />
            </div>
            {/* Mobile Image (Hidden on PC) */}
            <div className="block md:hidden w-full h-full relative">
                <LazyImage
                    src={mobileSrc}
                    alt={alt}
                    fill={fill}
                    priority={priority}
                    className="object-cover"
                />
            </div>
        </div>
    );
}
