"use client";

import { motion } from "framer-motion";

export default function LocationInfo() {
    return (
        /* z-10にしておくことでTopから突き抜けた文字(z-20)が上に重なる */
        <section className="relative w-full bg-black text-white pt-32 pb-48 px-6 md:px-20 lg:px-32 z-10">
            <div className="max-w-4xl">
                {/* 会場名 */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter">
                        札幌コンベンションセンター
                    </h2>
                </motion.div>

                {/* 説明文 */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="space-y-6 text-sm md:text-base lg:text-lg font-light leading-relaxed tracking-widest text-gray-300 max-w-2xl"
                >
                    <p>
                        北海道の産業・文化の拠点として、数々の国際会議やイベントが開催されてきた広大な空間。
                        モダンな建築と充実した設備が、R-EXPO2026の熱量を最大限に引き出します。
                    </p>
                    <p>
                        地下鉄東西線「東札幌駅」から徒歩圏内という好立地。
                        高い天井が開放感を生むメインホールから、緻密な議論が行われる会議室まで、
                        あらゆるレイヤーの「本気」を許容するステージです。
                    </p>
                </motion.div>
            </div>
        </section>
    );
}