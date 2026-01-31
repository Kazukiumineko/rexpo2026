"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    className?: string;
    style?: React.CSSProperties;
    viewportAmount?: number; // どのくらい見えたら発火するか (0~1)
    once?: boolean;         // 一回だけ再生するか
}

export function FadeIn({
    children,
    delay = 0,
    duration = 0.8,
    direction = "up",
    className = "",
    style = {},
    viewportAmount = 0.3,
    once = true,
}: FadeInProps) {
    const directions = {
        up: { y: 30, x: 0 },
        down: { y: -30, x: 0 },
        left: { y: 0, x: 30 },
        right: { y: 0, x: -30 },
        none: { y: 0, x: 0 },
    };

    const initial = {
        opacity: 0,
        ...directions[direction],
    };

    return (
        <motion.div
            initial={initial}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: once, amount: viewportAmount }}
            transition={{ duration: duration, ease: "easeOut", delay: delay }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
}

interface ScaleOnHoverProps {
    children: ReactNode;
    scale?: number;
    className?: string;
}

export function ScaleOnHover({ children, scale = 1.05, className = "" }: ScaleOnHoverProps) {
    return (
        <motion.div
            whileHover={{ scale: scale }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
