import { Download } from "lucide-react";
import { useEffect, useRef } from "react";

interface TableFooterProps {
    onPrintClick: () => void;
    lastUpdated?: string;
    onInView?: (inView: boolean) => void;
}

export default function TableFooter({ onPrintClick, lastUpdated, onInView }: TableFooterProps) {
    const footerRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (onInView) {
                    onInView(entry.isIntersecting);
                }
            },
            { threshold: 0.1 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, [onInView]);

    return (
        <section className="w-full px-0 md:px-2 print:hidden">
            <div className="max-w-[1600px] mx-auto">
                <div className="mt-2 md:mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-4 md:ml-20">
                        <button
                            onClick={onPrintClick}
                            className="flex items-center gap-2 bg-[#092040] text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-[#092040]/90 transition-all hover:scale-105 active:scale-95 shadow-lg"
                        >
                            <Download className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="font-bold text-xs md:text-base">PDFでダウンロード</span>
                        </button>
                        <span className="text-xs md:text-sm text-gray-500 font-medium whitespace-nowrap">
                            最終更新：{lastUpdated}
                        </span>
                    </div>

                    <p
                        ref={footerRef}
                        className="text-xs text-gray-500 text-right"
                    >
                        ※ スケジュールは進行状況により前後する可能性があります。
                    </p>
                </div>
            </div>
        </section>
    );
}
