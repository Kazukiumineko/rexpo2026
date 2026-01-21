import React from "react";

export default function UnderConstruction() {
    return (
        <section className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-white py-20 px-4">
            <div className="text-center space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-widest">
                    掲載準備中です
                </h2>
                <p className="text-gray-500 text-sm md:text-base tracking-wide">
                    現在コンテンツを準備しております。<br className="md:hidden" />公開まで今しばらくお待ちください。
                </p>
            </div>
        </section>
    );
}
