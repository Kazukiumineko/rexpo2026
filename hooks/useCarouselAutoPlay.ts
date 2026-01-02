import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

export function useCarouselAutoPlay() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    );

    return plugin;
}
