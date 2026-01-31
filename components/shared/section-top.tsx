import LazyImage from "@/components/shared/lazy-image";
import { FadeIn } from "@/components/shared/anim-wrapper";
import { ReactNode, CSSProperties } from "react";

interface SectionTopProps {
    imageSrc: string;
    imageAlt: string;
    backTitle?: ReactNode;
    /**
     * Vertical Title のクラス
     * 位置(top/bottom)や z-index を指定する
     */
    backTitleClassName?: string;
    backTitleDirection?: "up" | "down" | "left" | "right";
    backTitleStyle?: CSSProperties;
    backTitleViewportAmount?: number;
    /**
     * テキストエリアを含むコンテナのクラス
     * padding, background, z-index, overflow などを指定する
     * 指定がない場合は下部エリアを描画しない
     */
    containerClassName?: string;
    /**
     * 画像のコンテナのクラス (オプション)
     * 高さなどを指定する。デフォルトは h-[55vh]
     */
    imageContainerClassName?: string;
    /**
     * 画像の上に重ねるオーバーレイ要素 (オプション)
     * 色付きフィルターなどを適用する場合に使用
     */
    imageOverlay?: ReactNode;
    imageClassName?: string;
    /**
     * 絶対配置で自由な場所に置くコンテンツ (LocationTopなどのポップアップ用)
     */
    absoluteContent?: ReactNode;
    children?: ReactNode;
    className?: string;
}

export default function SectionTop({
    imageSrc,
    imageAlt,
    backTitle,
    backTitleClassName,
    backTitleDirection = "left",
    backTitleStyle,
    backTitleViewportAmount,
    containerClassName,
    imageContainerClassName,
    imageOverlay,
    imageClassName,
    absoluteContent,
    children,
    className
}: SectionTopProps) {
    return (
        <section className={`relative w-full bg-[#f1f1f1] isolate ${className ?? ""}`}>
            {/* 1. 画像エリア */}
            <div className={`relative w-full z-0 ${imageContainerClassName ?? "h-[55vh]"}`}>
                <LazyImage
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className={`object-cover ${imageClassName || "object-center"}`}
                    priority
                />
                {imageOverlay}
            </div>

            {/* 2. 下部エリア (テキスト用) - containerClassNameがある場合のみ表示 */}
            {containerClassName && (
                <div className={containerClassName}>
                    <div className="w-full max-w-[1600px] mx-auto pointer-events-none">
                        <div className="w-min md:w-full pointer-events-auto">
                            {children}
                        </div>
                    </div>
                </div>
            )}

            {/* 3. 背景タイトル (縦書き) */}
            {backTitle && (
                <div className={`pointer-events-none ${backTitleClassName}`}>
                    <FadeIn
                        duration={0.8}
                        direction={backTitleDirection}
                        viewportAmount={backTitleViewportAmount}
                        style={{ writingMode: "vertical-rl", ...backTitleStyle }}
                    >
                        <h1>{backTitle}</h1>
                    </FadeIn>
                </div>
            )}

            {/* 4. 絶対配置コンテンツ */}
            {absoluteContent}
        </section>
    );
}
