import { ZoomIn, ZoomOut } from "lucide-react";

interface ZoomBarProps {
    scale: number;
    onScaleChange: (scale: number) => void;
}

export default function ZoomBar({ scale, onScaleChange }: ZoomBarProps) {
    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onScaleChange(parseFloat(e.target.value));
    };

    return (
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-0 mb-4 print:hidden">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-sm border border-gray-200 flex items-center gap-3 w-full md:w-[400px] md:ml-14">
                <ZoomOut size={16} className="text-gray-500" />
                <input
                    type="range"
                    min="0.5"
                    max="1.5"
                    step="0.1"
                    value={scale}
                    onChange={handleSliderChange}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#092040]"
                />
                <ZoomIn size={16} className="text-gray-500" />
                <span className="text-xs font-medium text-gray-500 w-8 text-right">
                    {Math.round(scale * 100)}%
                </span>
            </div>
        </div>
    );
}
