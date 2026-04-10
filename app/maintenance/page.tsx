import { Home } from "lucide-react";

export default function MaintenancePage() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center p-6 bg-gray-100 dark:bg-gray-950">
            <div className="text-center space-y-4">
                <p className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100">
                    ただいまメンテナンス中です。<br className="md:hidden" />
                    再開まで今しばらくお待ちください。
                </p>
                <div className="pt-8">
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                        お問い合わせ先<br />
                        <span className="inline-flex items-center gap-1.5 justify-center">
                            <a href="https://www2.spc.ritsumei.ac.jp/top_menu/topmenu.html" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                                <Home className="w-5 h-5" />
                            </a>
                            立命館慶祥中学校・高等学校
                        </span><br />
                        TEL 011-388-8888
                    </p>
                </div>
            </div>
        </div>
    )
}
