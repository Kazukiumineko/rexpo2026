"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PasswordLockProps {
    children: React.ReactNode;
}

export default function PasswordLock({ children }: PasswordLockProps) {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);

    // Development/Demo password - easy to change
    const SECRET_KEY = "rexpostaff";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input === SECRET_KEY) {
            setIsUnlocked(true);
            // Persistence removed to force login every time
            // sessionStorage.setItem("rexpo-secret-unlocked", "true");
        } else {
            setError(true);
            setInput("");
            setTimeout(() => setError(false), 1000);
        }
    };

    return (
        <>
            {/* The protected content */}
            <div className={`transition-opacity duration-1000 ${isUnlocked ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}>
                {isUnlocked && children}
            </div>

            {/* Lock Screen Overlay */}
            <AnimatePresence>
                {!isUnlocked && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, pointerEvents: "none" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-blue-900 text-white"
                    >
                        <div className="w-full max-w-md px-8 text-center">

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="mb-8"
                            >
                                <h1 className="text-3xl font-oswald font-bold tracking-[0.2em] mb-2 uppercase text-white">
                                    Restricted Area
                                </h1>
                                <p className="text-xs text-gray-300 font-zen-kaku tracking-widest">
                                    関係者専用ページ / SECRET ACCESS
                                </p>
                            </motion.div>

                            <motion.form
                                onSubmit={handleSubmit}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="relative flex flex-col gap-6"
                            >
                                <div className="relative group">
                                    <input
                                        type="password"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="ENTER PASSWORD"
                                        className={`w-full bg-white/5 border-b py-3 px-4 text-center text-lg tracking-widest outline-none transition-all duration-300 font-oswald
                                            ${error ? "border-red-500 text-red-500 placeholder-red-500/50" : "border-white/20 focus:border-blue-400 text-white placeholder-white/20"}
                                        `}
                                        autoFocus
                                    />
                                    {/* Animated underline effect */}
                                    <div className={`absolute bottom-0 left-0 w-0 h-[1px] bg-blue-400 transition-all duration-500 ease-out group-focus-within:w-full ${error ? "bg-red-500 w-full" : ""}`} />
                                </div>

                                <button
                                    type="submit"
                                    className="relative overflow-hidden group w-full py-3 bg-white/10 hover:bg-white/20 border border-white/10 transition-all duration-300 rounded-sm"
                                >
                                    <span className="relative z-10 font-oswald tracking-[0.2em] text-sm group-hover:text-blue-200 transition-colors">
                                        UNLOCK
                                    </span>
                                </button>

                                {error && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="absolute -bottom-10 left-0 w-full text-center text-red-500 text-xs tracking-widest font-zen-kaku"
                                    >
                                        ACCESS DENIED
                                    </motion.p>
                                )}
                            </motion.form>
                        </div>

                        {/* Background decorative elements */}
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
                            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }}></div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
