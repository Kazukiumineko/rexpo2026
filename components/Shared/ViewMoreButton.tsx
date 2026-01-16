
import Link from "next/link";

interface ViewMoreButtonProps {
    href: string;
    className?: string;
    theme?: "light" | "dark";
}

export default function ViewMoreButton({ href, className = "", theme = "light" }: ViewMoreButtonProps) {
    const isLight = theme === "light";

    const containerClasses = isLight
        ? "border-white text-white bg-white/5 hover:bg-white hover:text-black"
        : "border-gray-800 text-gray-800 bg-white hover:bg-gray-800 hover:text-white";

    return (
        <Link
            href={href}
            className={`group relative inline-block transition-transform duration-300 hover:scale-105 ${className}`}
        >
            <div
                className={`flex items-center justify-center px-3 py-1 md:px-5 md:py-1.5 border rounded-full backdrop-blur-sm transition-all duration-300 ${containerClasses}`}
            >
                <span className="font-kaku text-[10px] md:text-xs font-medium tracking-widest whitespace-nowrap">
                    VIEW MORE
                </span>
            </div>
        </Link>
    );
}
