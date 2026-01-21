"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ComingSoonPopup() {
    const [isOpen, setIsOpen] = useState(true);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = () => {
        // Toggle check state
        const nextState = !isChecked;
        setIsChecked(nextState);

        // If checked, close the popup after a brief delay
        if (nextState) {
            setTimeout(() => {
                setIsOpen(false);
            }, 600);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="bg-white rounded-xl shadow-2xl p-8 md:p-10 max-w-md w-full text-center border border-gray-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 tracking-wider">
                            このページは掲載準備中です
                        </h2>

                        <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed font-medium">
                            本ページの内容・写真は<br className="hidden md:block" />
                            実際のイベントのものとは異なります
                        </p>

                        <div className="flex items-center justify-center space-x-3 select-none">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    id="accept-view-checkbox"
                                    checked={isChecked}
                                    onChange={handleCheck}
                                    className="peer appearance-none w-6 h-6 border-2 border-gray-300 rounded cursor-pointer transition-colors checked:bg-blue-600 checked:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                />
                                <svg
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <label
                                htmlFor="accept-view-checkbox"
                                className="text-base text-gray-800 cursor-pointer hover:text-gray-600 transition-colors font-bold tracking-wide"
                            >
                                閲覧する
                            </label>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
