"use client";

import { motion } from "framer-motion";

export default function Access() {
    return (
        <section className="w-full bg-white text-black py-6 md:py-12 px-6 md:px-20 lg:px-32 overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">

                {/* --- 左側: アクセス情報 --- */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col space-y-8"
                >
                    {/* タイトルエリア */}
                    <div>
                        <h2 className="font-oswald text-5xl md:text-7xl font-bold tracking-tight mb-2 text-black">
                            ACCESS
                        </h2>

                    </div>

                    {/* 詳細テキスト */}
                    <div className="space-y-8 text-gray-700 leading-relaxed font-jp">
                        <div>
                            <h3 className="text-black font-bold text-xl mb-2">
                                <a
                                    href="https://www.sora-scc.jp/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
                                >
                                    札幌コンベンションセンター
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="translate-y-[1px]">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </a>
                            </h3>
                            <p className="text-sm md:text-base font-light">
                                〒003-0006 北海道札幌市白石区東札幌6条1丁目1-1
                            </p>
                        </div>

                        <div className="space-y-4 border-l-2 border-black/20 pl-6">
                            <div>
                                <span className="block text-black font-bold mb-1">地下鉄でお越しの方</span>
                                <p className="font-light">
                                    地下鉄東西線 東札幌駅 1番出口より徒歩約8分
                                </p>
                            </div>

                            <div>
                                <span className="block text-black font-bold mb-1">お車・タクシーでお越しの方</span>
                                <p className="font-light">
                                    当日は駐車場をご用意しておりますが、混雑緩和のため公共交通機関の利用を推奨します。
                                </p>
                            </div>
                        </div>

                        <a
                            /* ボタンのリンク先も正しい場所に変更しました */
                            href="https://www.google.com/maps/search/?api=1&query=札幌コンベンションセンター"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block border border-black/30 px-6 py-3 text-sm hover:bg-black hover:text-white transition-colors duration-300"
                        >
                            Google Mapで見る →
                        </a>
                    </div>
                </motion.div>

                {/* --- 右側: 地図 --- */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative w-full h-[400px] lg:h-[500px] rounded-sm overflow-hidden border border-black/10"
                >
                    {/* 【修正】札幌コンベンションセンターを中心にした埋め込みURL */}
                    <iframe
                        title="Sapporo Convention Center Map"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://maps.google.com/maps?q=札幌コンベンションセンター&t=m&z=15&output=embed&iwloc=near"
                    ></iframe>
                </motion.div>

            </div>
        </section>
    );
}