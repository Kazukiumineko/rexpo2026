import { X, FileText, Download, Maximize2 } from "lucide-react";

interface PrintModalProps {
    isOpen: boolean;
    onClose: () => void;
    onPrint: (scale: number) => void;
}

export default function PrintModal({ isOpen, onClose, onPrint }: PrintModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 print:hidden animate-in fade-in duration-200">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative animate-in zoom-in-95 duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X size={24} />
                </button>

                <h3 className="text-xl font-bold text-[#092040] mb-2 flex items-center gap-2">
                    <Download className="text-[#092040]" />
                    保存サイズを選択
                </h3>
                <p className="text-base text-gray-500 mb-6">
                    用途に合わせてPDFのサイズを選択してください。
                </p>

                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={() => onPrint(1)}
                        className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-xl hover:border-[#092040] hover:bg-blue-50 transition-all group"
                    >
                        <FileText size={40} className="text-gray-400 group-hover:text-[#092040] mb-3 transition-colors" />
                        <span className="font-bold text-lg text-gray-700 group-hover:text-[#092040]">A4</span>
                        <span className="text-xs text-gray-400 mt-1">標準サイズ</span>
                    </button>

                    <button
                        onClick={() => onPrint(1.41)}
                        className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-xl hover:border-[#092040] hover:bg-blue-50 transition-all group"
                    >
                        <Maximize2 size={40} className="text-gray-400 group-hover:text-[#092040] mb-3 transition-colors" />
                        <span className="font-bold text-lg text-gray-700 group-hover:text-[#092040]">A3</span>
                        <span className="text-xs text-gray-400 mt-1">拡大サイズ</span>
                    </button>
                </div>

                <div className="mt-6 p-3 bg-red-500 rounded-lg text-base text-[#f1f1f1f1] flex gap-2 items-start text-left">
                    <span className="font-bold text-[#f1f1f1f1] whitespace-nowrap">ご注意：</span>
                    <span>
                        印刷画面が開いたら、用紙サイズをご自身でA4横またはA3横に設定してください。用紙サイズに最適化されたタイムテーブルが印刷されます。
                    </span>
                </div>
            </div>
        </div>
    );
}
