import Link from 'next/link';
import licensesData from './licenses.json';

export default function LicensePage() {
    const ossLicenses = Object.entries(licensesData).map(([key, value]: [string, any]) => {
        const lastAtIndex = key.lastIndexOf('@');
        const name = key.substring(0, lastAtIndex);
        const version = key.substring(lastAtIndex + 1);

        return {
            name,
            version,
            license: value.licenses,
            url: value.repository || value.url,
            publisher: value.publisher,
            email: value.email
        };
    });

    return (
        <div className="min-h-screen bg-[#f1f1f1] text-[#092040] py-20 px-6 md:px-20 font-sans">
            {/* CLOSEボタン */}
            <Link href="/" className="fixed top-6 right-6 z-50 text-sm font-bold tracking-widest border border-[#092040] px-4 py-2 rounded-full hover:bg-[#092040] hover:text-white transition-colors">
                CLOSE
            </Link>

            <div className="max-w-4xl mx-auto mt-20">
                <h1 className="text-4xl md:text-6xl font-bold mb-10 tracking-wider font-[var(--font-oswald)]">LICENSE</h1>

                <div className="space-y-16 text-sm md:text-base leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold mb-4 border-b border-[#092040]/20 pb-2">Credits</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-bold mb-2">Design & Development</h3>
                                <p className="opacity-80">Kazuki Nishijima</p>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">
                                    Technical Cooperation</h3>
                                <p className="opacity-80">Ichiro Ishikawa</p>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">Special Thanks</h3>
                                <p className="opacity-80">Naoki Oosawa and all Ritsumeikan Keisho High School teachers</p>
                            </div>
                        </div>
                    </section>

                    {/* 3. フォントライセンス */}
                    <section>
                        <h2 className="text-xl font-bold mb-4 border-b border-[#092040]/20 pb-2">Font Licenses</h2>
                        <ul className="list-disc pl-5 mt-2 space-y-1 opacity-80">
                            <li>Oswald (Google Fonts) - OFL</li>
                            <li>Zen Kaku Gothic New (Google Fonts) - OFL</li>
                        </ul>
                    </section>

                    {/* 4. 追加：オープンソースライセンス一覧 */}
                    <section>
                        <h2 className="text-xl font-bold mb-6 border-b border-[#092040]/20 pb-2">Open Source Software</h2>
                        <p className="mb-4 text-sm opacity-70">Total Dependencies: {ossLicenses.length}</p>
                        <div className="grid grid-cols-1 gap-4">
                            {ossLicenses.map((lib, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-5 rounded-lg border border-[#092040]/5 shadow-sm hover:shadow-md transition-all break-words"
                                >
                                    <div className="flex flex-col md:flex-row justify-between gap-4">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap items-center gap-3 mb-1">
                                                <h3 className="font-bold text-lg break-all">{lib.name}</h3>
                                                <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 border border-[#092040]/30 rounded text-[#092040]/80 whitespace-nowrap">
                                                    {lib.license}
                                                </span>
                                            </div>
                                            <p className="text-xs opacity-50 mb-1">Version: {lib.version}</p>
                                            {lib.publisher && <p className="text-xs opacity-70">Publisher: {lib.publisher}</p>}
                                        </div>
                                        {lib.url && (
                                            <a
                                                href={lib.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs font-bold tracking-wider border-b border-[#092040] pb-0.5 hover:opacity-50 transition-opacity whitespace-nowrap self-start mt-2 md:mt-0"
                                            >
                                                VISIT REPO
                                            </a>
                                        )}
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