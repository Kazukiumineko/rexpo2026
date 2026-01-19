import Link from 'next/link';

// ライセンスデータの定義
const ossLicenses = [
    {
        name: "Next.js",
        version: "16.1.0",
        license: "MIT",
        url: "https://nextjs.org/",
        description: "The React Framework for the Web"
    },
    {
        name: "React",
        version: "19.2.3",
        license: "MIT",
        url: "https://react.dev/",
        description: "The library for web and native user interfaces"
    },
    {
        name: "React DOM",
        version: "19.2.3",
        license: "MIT",
        url: "https://react.dev/",
        description: "React package for working with the DOM"
    },
    {
        name: "Tailwind CSS",
        version: "4.1.18",
        license: "MIT",
        url: "https://tailwindcss.com/",
        description: "A utility-first CSS framework"
    },
    {
        name: "Framer Motion",
        version: "12.26.2",
        license: "MIT",
        url: "https://www.framer.com/motion/",
        description: "A production-ready motion library for React"
    },
    {
        name: "Lucide React",
        version: "0.562.0",
        license: "ISC",
        url: "https://lucide.dev/",
        description: "Beautiful & consistent icon toolkit"
    },
    {
        name: "Radix UI (Slot)",
        version: "1.2.4",
        license: "MIT",
        url: "https://www.radix-ui.com/",
        description: "Unstyled, accessible components"
    },
    {
        name: "Embla Carousel React",
        version: "8.6.0",
        license: "MIT",
        url: "https://www.embla-carousel.com/",
        description: "A lightweight carousel library for React"
    },
    {
        name: "Embla Carousel Autoplay",
        version: "8.6.0",
        license: "MIT",
        url: "https://www.embla-carousel.com/plugins/autoplay/",
        description: "Autoplay plugin for Embla Carousel"
    },
    {
        name: "clsx",
        version: "2.1.1",
        license: "MIT",
        url: "https://github.com/lukeed/clsx",
        description: "A tiny utility for constructing className strings"
    },
    {
        name: "tailwind-merge",
        version: "3.4.0",
        license: "MIT",
        url: "https://github.com/dcastil/tailwind-merge",
        description: "Utility to merge Tailwind CSS classes"
    },
    {
        name: "class-variance-authority",
        version: "0.7.1",
        license: "MIT",
        url: "https://cva.style/",
        description: "Class Variance Authority"
    },
    {
        name: "TypeScript",
        version: "5.x",
        license: "Apache-2.0",
        url: "https://www.typescriptlang.org/",
        description: "JavaScript with syntax for types"
    },
    {
        name: "PostCSS",
        version: "8.5.6",
        license: "MIT",
        url: "https://postcss.org/",
        description: "A tool for transforming CSS with JavaScript"
    }
];

export default function LicensePage() {
    return (
        <div className="min-h-screen bg-[#f1f1f1] text-[#092040] py-20 px-6 md:px-20 font-sans">
            {/* CLOSEボタン */}
            <Link href="/" className="fixed top-6 right-6 z-50 text-sm font-bold tracking-widest border border-[#092040] px-4 py-2 rounded-full hover:bg-[#092040] hover:text-white transition-colors">
                CLOSE
            </Link>

            <div className="max-w-4xl mx-auto mt-20">
                <h1 className="text-4xl md:text-6xl font-bold mb-10 tracking-wider font-[var(--font-oswald)]">LICENSE</h1>

                <div className="space-y-16 text-sm md:text-base leading-relaxed">

                    {/* 1. コピーライト */}
                    <section>
                        <h2 className="text-xl font-bold mb-4 border-b border-[#092040]/20 pb-2">R-EXPO 2026</h2>
                        <p className="opacity-80">
                            © R-EXPO 2026 Executive Committee. All Rights Reserved.
                        </p>
                    </section>

                    {/* 2. クレジット */}
                    <section>
                        <h2 className="text-xl font-bold mb-4 border-b border-[#092040]/20 pb-2">Credits</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-bold mb-2">Design & Development</h3>
                                <p className="opacity-80">Ritsumeikan Keisho Junior Senior High School</p>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">Special Thanks</h3>
                                <p className="opacity-80">All Contributors and Supporters</p>
                            </div>
                        </div>
                    </section>

                    {/* 3. フォントライセンス */}
                    <section>
                        <h2 className="text-xl font-bold mb-4 border-b border-[#092040]/20 pb-2">Font Licenses</h2>
                        <ul className="list-disc pl-5 mt-2 space-y-1 opacity-80">
                            <li>Noto Sans JP (Google Fonts) - OFL</li>
                            <li>Oswald (Google Fonts) - OFL</li>
                            <li>Zen Kaku Gothic New (Google Fonts) - OFL</li>
                            <li>BIZ UDPGothic (Google Fonts) - OFL</li>
                        </ul>
                    </section>

                    {/* 4. 追加：オープンソースライセンス一覧 */}
                    <section>
                        <h2 className="text-xl font-bold mb-6 border-b border-[#092040]/20 pb-2">Open Source Software</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {ossLicenses.map((lib, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-5 rounded-lg border border-[#092040]/5 shadow-sm hover:shadow-md transition-all"
                                >
                                    <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <h3 className="font-bold text-lg">{lib.name}</h3>
                                                <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 border border-[#092040]/30 rounded text-[#092040]/80">
                                                    {lib.license}
                                                </span>
                                            </div>
                                            <p className="text-xs opacity-50 mb-2">Version: {lib.version}</p>
                                            <p className="text-sm opacity-80">{lib.description}</p>
                                        </div>
                                        <a
                                            href={lib.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs font-bold tracking-wider border-b border-[#092040] pb-0.5 hover:opacity-50 transition-opacity whitespace-nowrap self-start mt-2 md:mt-0"
                                        >
                                            VISIT WEBSITE
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-xs opacity-50 text-center">
                            This software includes open source software distributed under the licenses above.<br />
                            Each license is the property of its respective owner.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}