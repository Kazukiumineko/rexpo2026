"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import LazyImage from "@/components/shared/lazy-image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/main-ui/carousel";
import { useCarouselAutoPlay } from "@/hooks/useCarouselAutoPlay";

const IMAGES = [
    "/stage-concept/Seito/Seito1.jpg",
    "/stage-concept/Seito/Seito2.jpg",
    "/stage-concept/Seito/Seito3.jpg",
    "/stage-concept/Seito/Seito4.jpg",
    "/stage-concept/Seito/Seito5.jpg",
];

export default function Seito() {
    const plugin = useCarouselAutoPlay();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="w-full py-12 md:py-24 overflow-hidden bg-transparent">
            <div className="max-w-[1400px] mx-auto relative px-6 md:px-12">
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full relative"
                    opts={{
                        loop: true,
                        align: "center",
                    }}
                >
                    <CarouselContent className="-ml-4 items-center">
                        {IMAGES.map((src, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-4 basis-[70%] md:basis-[45%] lg:basis-[33%]"
                            >
                                <div
                                    className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg cursor-pointer transition-transform hover:scale-[1.02] active:scale-95"
                                    onClick={() => setSelectedImage(src)}
                                >
                                    <LazyImage
                                        src={src}
                                        alt={`Seito Image ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Overlay Gradients to simulate focus/dimming of side items */}
                    <div className="absolute inset-y-0 left-0 w-1/4 md:w-1/3 bg-gradient-to-r from-[#092040]/80 to-transparent pointer-events-none z-10" />
                    <div className="absolute inset-y-0 right-0 w-1/4 md:w-1/3 bg-gradient-to-l from-[#092040]/80 to-transparent pointer-events-none z-10" />
                </Carousel>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative flex flex-col items-end md:block"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="mb-4 md:mb-0 md:absolute md:left-full md:top-0 md:ml-6 text-white/80 hover:text-white transition-colors z-[110]"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X size={32} className="w-8 h-8 md:w-12 md:h-12" />
                            </button>
                            <img
                                src={selectedImage}
                                alt="Expanded Seito View"
                                className="max-w-[85vw] max-h-[75vh] md:max-w-[85vw] md:max-h-[85vh] object-contain shadow-2xl rounded-sm cursor-default"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
