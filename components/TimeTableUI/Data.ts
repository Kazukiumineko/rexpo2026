// ▼ イベントデータ型定義
export type EventItem = {
    id: string;
    venueIndex: number; // venues配列のインデックス (0-14)
    title: string;
    start: string; // "HH:MM"
    end: string;   // "HH:MM"
    color?: string; // オプションで色分け可能
};

// ▼ 設定定数（レイアウト調整用）
export const CONFIG = {
    START_HOUR: 9,       // 9:00開始
    END_HOUR: 17,        // 17:00終了
    HOUR_HEIGHT: 180,    // 1時間あたりの高さ(px)
    HEADER_HEIGHT: 60,   // ヘッダーの高さ
    COLUMN_WIDTH: 200,   // 各会場カラムの幅
    TIME_COL_WIDTH: 60,  // 時間軸カラムの幅
};

// ▼ 会場データ (15会場)
export const venues = [
    "メインホール大",
    "小ホール",
    "中ホール",
    "特別会議場",
    "エントランスホール",
    "和室",
    "104",
    "105",
    "107",
    "108",
    "202",
    "201",
    "204",
    "206",
    "207",
];

// ▼ タイムテーブルデータ
export const events: EventItem[] = [
    // --- メインホール大 (Index 0) ---
    { id: "m-1", venueIndex: 0, title: "Opening", start: "09:30", end: "10:00" },
    { id: "m-2", venueIndex: 0, title: "Ceremony (開会式典)", start: "10:00", end: "10:30" },
    { id: "m-3", venueIndex: 0, title: "立命館附属校 課題研究 + 弁論研究部", start: "10:35", end: "12:30" },
    { id: "m-4", venueIndex: 0, title: "SSH海外合同研究発表会", start: "13:00", end: "13:30" },
    { id: "m-5", venueIndex: 0, title: "Bridging Ceremony", start: "13:30", end: "14:00" },
    { id: "m-6", venueIndex: 0, title: "生徒有志 バンド発表", start: "14:30", end: "16:00" },
    { id: "m-7", venueIndex: 0, title: "Closing Ceremony", start: "16:30", end: "17:00" },

    // --- 小ホール (Index 1) ---
    { id: "s-1", venueIndex: 1, title: "CS講座 株式会社Progate CEO加藤氏 講演会", start: "10:35", end: "12:00" },
    { id: "s-2", venueIndex: 1, title: "生徒主催 e-sports大会 (スマブラ王決定戦)", start: "13:00", end: "16:00" },

    // --- 中ホール (Index 2) ---
    { id: "md-1", venueIndex: 2, title: "RTA award 開会式", start: "10:30", end: "10:50" },
    { id: "md-2", venueIndex: 2, title: "高3R授業「演劇表現」", start: "11:00", end: "11:30" },
    { id: "md-3", venueIndex: 2, title: "Fashion / Peace部門", start: "11:40", end: "12:30" },
    { id: "md-4", venueIndex: 2, title: "中学演劇部 R-EXPO公演", start: "12:40", end: "13:20" },
    { id: "md-5", venueIndex: 2, title: "Food / Traditional Culture部門", start: "13:30", end: "14:20" },
    { id: "md-6", venueIndex: 2, title: "生徒有志 個人芸術発表会", start: "14:30", end: "15:00" },
    { id: "md-7", venueIndex: 2, title: "Snow / Sports部門", start: "15:10", end: "15:50" },
    { id: "md-8", venueIndex: 2, title: "RitsAward 閉会式", start: "16:00", end: "16:30" },

    // --- 特別会議場 (Index 3) ---
    { id: "sp-1", venueIndex: 3, title: "協賛企業 キャリア学習体験ブース", start: "10:30", end: "16:00" },

    // --- エントランスホール (Index 4) ---
    { id: "en-1", venueIndex: 4, title: "展示会場", start: "10:30", end: "16:30" },

    // --- 和室 (Index 5) ---
    { id: "wa-1", venueIndex: 5, title: "茶道部 R-EXPOお茶会", start: "12:30", end: "15:00" },

    // --- 104 (Index 6) - A会場 ---
    { id: "r104-1", venueIndex: 6, title: "中学研修報告(A) [NZ/京都/北海道]", start: "10:30", end: "11:30" },
    { id: "r104-2", venueIndex: 6, title: "高2海外研修報告(A) [タイ/マレーシア/米国]", start: "11:30", end: "12:30" },
    { id: "r104-3", venueIndex: 6, title: "CS講座 立命館大学院生 講演会", start: "13:00", end: "14:00" },
    { id: "r104-4", venueIndex: 6, title: "立命館附属校 課題研究体験ブース", start: "14:30", end: "16:00" },

    // --- 105 (Index 7) ---
    { id: "r105-1", venueIndex: 7, title: "CS講座「R-Union」大学生による「大学生活のすゝめ」", start: "10:30", end: "12:30" },
    { id: "r105-2", venueIndex: 7, title: "北大コラボ「もののけアート展」× 慶祥美術部", start: "13:00", end: "16:00" },

    // --- 107 (Index 8) - 国際部 ---
    { id: "r107-1", venueIndex: 8, title: "留学研修報告会 (モルドバ/ネパール/トビタテ)", start: "10:30", end: "12:30" },
    { id: "r107-2", venueIndex: 8, title: "APU国際交流 / 結MUSUBU / 東北メディカルツアー", start: "13:00", end: "15:00" },

    // --- 108 (Index 9) ---
    { id: "r108-1", venueIndex: 9, title: "将棋部【対局】", start: "10:30", end: "12:30" },
    { id: "r108-2", venueIndex: 9, title: "K-Tech【ゲーム体験】", start: "13:00", end: "14:30" },
    { id: "r108-3", venueIndex: 9, title: "学生団体Smile【核兵器の力とその代償】", start: "14:30", end: "16:00" },

    // --- 202 (Index 10) ---
    { id: "r202-1", venueIndex: 10, title: "課題研究 ポスターセッション", start: "10:30", end: "16:00" },

    // --- 201 (Index 11) ---
    { id: "r201-1", venueIndex: 11, title: "自然科学部 展示発表", start: "10:30", end: "16:00" },

    // --- 204 (Index 12) - C会場 ---
    { id: "r204-1", venueIndex: 12, title: "中学研修報告(C) [NZ/京都/北海道]", start: "10:30", end: "11:30" },
    { id: "r204-2", venueIndex: 12, title: "高2海外研修報告(C) [豪州/その他]", start: "11:30", end: "12:30" },

    // --- 206 (Index 13) - B会場 ---
    { id: "r206-1", venueIndex: 13, title: "中学研修報告(B) [NZ/京都/北海道]", start: "10:30", end: "11:30" },
    { id: "r206-2", venueIndex: 13, title: "高2海外研修報告(B) [台湾/インドネシア/ベトナム/リトアニア/ガラパゴス]", start: "11:30", end: "13:00" },

    // --- 207 (Index 14) ---
    { id: "r207-1", venueIndex: 14, title: "羽幌町チャレンジ企画【特産品販売】", start: "12:30", end: "14:30" },
    { id: "r207-2", venueIndex: 14, title: "クイズ研究会 / レンガ企画 / 和菓子企画", start: "15:00", end: "16:30" },
];