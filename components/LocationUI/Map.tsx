"use client";

import { motion } from "framer-motion";

export default function Map() {
    return (
        <section className="w-full bg-black text-white py-24 md:py-32 px-6 md:px-20 lg:px-32 overflow-hidden">

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
                        <h2 className="font-oswald text-5xl md:text-7xl font-bold tracking-tight mb-2">
                            ACCESS
                        </h2>
                        <p className="text-gray-500 text-sm tracking-widest uppercase font-light">
                            Venue Location
                        </p>
                    </div>

                    {/* 詳細テキスト */}
                    <div className="space-y-8 text-gray-300 leading-relaxed font-jp">
                        <div>
                            <h3 className="text-white font-bold text-xl mb-2">札幌コンベンションセンター</h3>
                            <p className="text-sm md:text-base font-light">
                                〒003-0006 北海道札幌市白石区東札幌6条1丁目1-1
                            </p>
                        </div>

                        <div className="space-y-4 border-l-2 border-white/20 pl-6">
                            <div>
                                <span className="block text-white font-bold mb-1">地下鉄でお越しの方</span>
                                <p className="font-light">
                                    地下鉄東西線「東札幌駅」より徒歩約8分
                                </p>
                            </div>

                            <div>
                                <span className="block text-white font-bold mb-1">お車・タクシーでお越しの方</span>
                                <p className="font-light">
                                    当日は300台分の駐車場をご用意しております
                                </p>
                            </div>
                        </div>

                        <a
                            /* ボタンのリンク先も正しい場所に変更しました */
                            href="https://www.google.com/maps/search/?api=1&query=札幌コンベンションセンター"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block border border-white/30 px-6 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-300"
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
                    className="relative w-full h-[400px] lg:h-[500px] rounded-sm overflow-hidden border border-white/10"
                >
                    {/* 【修正】札幌コンベンションセンターを中心にした埋め込みURL */}
                    <iframe
                        title="Sapporo Convention Center Map"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
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