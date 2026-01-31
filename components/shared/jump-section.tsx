import { ReactNode } from "react";
import Link from "next/link";
import LazyImage from "@/components/shared/lazy-image";
import { FadeIn } from "@/components/shared/anim-wrapper";

export interface JumpLinkContent {
    title: string;
    description: ReactNode;
    href: string;
    buttonText?: string;
    imageSrc: string;
    imageAlt: string;
}

interface JumpSectionProps {
    contents: JumpLinkContent[];
    theme?: "dark" | "light";
    topContent?: ReactNode;
    className?: string;
}

export default function JumpSection({
    contents,
    theme = "dark",
    topContent,
    className = "",
}: JumpSectionProps) {
    const isDark = theme === "dark";

    // Theme-based styles
    const styles = {
        sectionBg: isDark ? "bg-transparent" : "bg-[#f1f1f1]",
        textColor: isDark ? "text-white" : "text-[#092040]",
        descColor: isDark ? "text-gray-300" : "text-gray-600",
        buttonBorder: isDark ? "border-white" : "border-[#092040]",
        buttonHoverBg: isDark ? "hover:bg-white" : "hover:bg-[#092040]",
        buttonHoverText: isDark ? "hover:text-[#092040]" : "hover:text-[#f1f1f1]",
        imageBorder: isDark ? "border-white/10" : "border-[#092040]/10",
        imageShadow: isDark ? "" : "shadow-xl",
    };

    return (
        <section
            className={`w-full py-24 md:py-32 px-6 md:px-20 lg:px-32 overflow-hidden ${styles.sectionBg} ${styles.textColor} ${className}`}
        >
            <div className="max-w-[1400px] mx-auto">
                {topContent && <div className="mb-24">{topContent}</div>}

                {contents.map((content, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${index > 0 ? "mt-24 md:mt-32" : ""
                            }`}
                    >
                        {/* --- 左側: テキスト & ボタン --- */}
                        <FadeIn
                            viewportAmount={0.2}
                            duration={0.8}
                            className="flex flex-col space-y-6"
                        >
                            <div>
                                <h2 className="font-oswald text-5xl md:text-7xl font-bold tracking-tight mb-6 uppercase">
                                    {content.title}
                                </h2>

                                <p className={`font-jp leading-relaxed mb-8 text-sm ${styles.descColor}`}>
                                    {content.description}
                                </p>

                                <Link
                                    href={content.href}
                                    className={`inline-block border px-8 py-3 text-sm tracking-widest transition-colors duration-300 rounded-full ${styles.buttonBorder} ${styles.buttonHoverBg} ${styles.buttonHoverText}`}
                                >
                                    {content.buttonText || "詳細を見る"}
                                </Link>
                            </div>
                        </FadeIn>

                        {/* --- 右側: 写真 --- */}
                        <FadeIn
                            viewportAmount={0.2}
                            duration={0.8}
                            delay={0.2}
                            className="w-full"
                        >
                            <Link
                                href={content.href}
                                className="block w-full h-full cursor-pointer group"
                            >
                                <div
                                    className={`relative w-full aspect-[4/3] md:aspect-[2/1] rounded-3xl overflow-hidden border ${styles.imageBorder} ${styles.imageShadow}`}
                                >
                                    <LazyImage
                                        src={content.imageSrc}
                                        alt={content.imageAlt}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </Link>
                        </FadeIn>
                    </div>
                ))}
            </div>
        </section>
    );
}
