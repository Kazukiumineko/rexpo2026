"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BackgroundVideoPreloader() {
    const pathname = usePathname();

    useEffect(() => {
        // Top page already loads the video, so skip it
        if (pathname === "/") return;

        const preloadVideo = () => {
            // Check if link already exists to avoid duplicates
            if (document.querySelector('link[rel="preload"][href="/Drone_mobile.mp4"]')) return;

            const link = document.createElement("link");
            link.rel = "preload";
            link.as = "video";
            link.href = "/Drone_mobile.mp4";
            link.type = "video/mp4";
            document.head.appendChild(link);

            // Also preload PC version if needed, but prioritizing mobile as requested
            // const linkPc = document.createElement("link");
            // linkPc.rel = "preload";
            // linkPc.as = "video";
            // linkPc.href = "/Drone.mp4";
            // document.head.appendChild(linkPc);
        };

        // Delay preloading to ensure current page assets load first
        if (document.readyState === "complete") {
            setTimeout(preloadVideo, 2000);
        } else {
            window.addEventListener("load", () => setTimeout(preloadVideo, 2000));
        }
    }, [pathname]);

    return null;
}
