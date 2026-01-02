import * as React from "react";
import { useInView, Variants } from "framer-motion";

export function useEventConceptAnimation() {
    const sectionRef = React.useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
        },
    };

    return {
        sectionRef,
        isInView,
        containerVariants,
        itemVariants,
    };
}
