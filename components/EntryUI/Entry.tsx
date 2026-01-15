"use client";

import { motion } from "framer-motion";

export default function Entry() {
    return (
        <section className="w-full bg-white pb-20 pt-12 flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full max-w-4xl px-4 flex justify-center"
            >
                <a
                    href="#" // リンク先は手動で設定
                    className="group relative inline-flex h-16 w-full md:w-auto items-center justify-center bg-black px-12 text-lg font-bold text-white transition-colors duration-300 hover:bg-gray-800 rounded-sm"
                >
                    <span className="text-xl">申込みフォームへ</span>
                </a>
            </motion.div>
        </section>
    );
}
