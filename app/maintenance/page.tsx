export default function MaintenancePage() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center p-6 bg-white dark:bg-gray-950">
            <div className="text-center space-y-4">
                <p className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100">
                    ただいまメンテナンス中です。<br className="md:hidden" />
                    再開まで今しばらくお待ちください。
                </p>
                <div className="pt-8">
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                        お問い合わせ先<br />
                        立命館慶祥中学校・高等学校<br />
                        TEL 011-388-8888
                    </p>
                </div>
            </div>
        </div>
    )
}
