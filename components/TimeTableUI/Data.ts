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
    "大ホール", //0
    "中ホール", //1
    "小ホール", //2
    "特別会議場", //3
    "104・105", //4
    "107・108", //5
    "201", //6
    "202", //7
    "204", //8
    "206", //9
    "207", //10
    "和室", //11
    "エントランスホール", //12
];

// ▼ タイムテーブルデータ
export const events: EventItem[] = [
    // --- 大ホール (Index 0) ---
    { id: "m-1", venueIndex: 0, title: "開会式典", start: "09:45", end: "10:15" },
    { id: "m-2", venueIndex: 0, title: "立命館附属校\n課題研究発表会", start: "10:40", end: "11:30" },
    { id: "m-3", venueIndex: 0, title: "SSH国際共同課題研究発表", start: "11:40", end: "12:30" },
    { id: "m-4", venueIndex: 0, title: "第2部開会式", start: "14:00", end: "14:30" },
    { id: "m-5", venueIndex: 0, title: "有志生徒バンド発表", start: "14:50", end: "16:20" },

    // --- 中ホール (Index 1) ---
    { id: "s-1", venueIndex: 1, title: "北海道大学コラボ企画\nRT Award\nFashion部門", start: "10:40", end: "11:20" },
    { id: "s-2", venueIndex: 1, title: "北海道大学コラボ企画\nRT Award\nPeace部門", start: "11:20", end: "12:05" },
    { id: "s-3", venueIndex: 1, title: "北海道大学コラボ企画\nRT Award\nFood部門", start: "12:05", end: "12:45" },
    { id: "s-4", venueIndex: 1, title: "北海道大学コラボ企画\nRT Award\nTraditional Culture部門", start: "12:45", end: "13:45" },
    { id: "s-5", venueIndex: 1, title: "北海道大学コラボ企画\nRT Award\nSnow部門", start: "14:45", end: "15:15" },
    { id: "s-6", venueIndex: 1, title: "北海道大学コラボ企画\nRT Award\nSports部門", start: "15:15", end: "15:45" },

    // --- 小ホール (Index 2) ---
    { id: "md-1", venueIndex: 2, title: "RED Talks\n弁論研究部", start: "10:30", end: "12:00" },
    { id: "md-2", venueIndex: 2, title: "株式会社Progate\nCEO加藤氏講演会", start: "12:20", end: "13:50" },
    { id: "md-3", venueIndex: 2, title: "生徒主催e-sports大会\nスマブラ王決定戦", start: "14:45", end: "16:30" },


    // --- 特別会議場 (Index 3) ---
    { id: "sp-1", venueIndex: 3, title: "高校3年生授業\n演劇表現卒業公演", start: "10:30", end: "11:10" },
    { id: "sp-2", venueIndex: 3, title: "中学演劇部\nR-EXPO特別公演", start: "11:25", end: "12:05" },
    { id: "sp-3", venueIndex: 3, title: "有志生徒\n芸術発表", start: "12:30", end: "13:45" },
    { id: "sp-4", venueIndex: 3, title: "有志生徒\nダンスステージ", start: "14:45", end: "16:30" },

    // --- 104・105 (Index 4) ---
    { id: "en-1", venueIndex: 4, title: "展示会場", start: "10:30", end: "16:30" },

    // --- 107・108 (Index 5) ---
    { id: "wa-1", venueIndex: 5, title: "茶道部 R-EXPOお茶会", start: "12:30", end: "15:00" },

    // --- 201 (Index 6) ---
    { id: "r104-1", venueIndex: 6, title: "中学研修報告(A) [NZ/京都/北海道]", start: "10:30", end: "11:30" },
    { id: "r104-2", venueIndex: 6, title: "高2海外研修報告(A) [タイ/マレーシア/米国]", start: "11:30", end: "12:30" },
    { id: "r104-3", venueIndex: 6, title: "CS講座 立命館大学院生 講演会", start: "13:00", end: "14:00" },
    { id: "r104-4", venueIndex: 6, title: "立命館附属校 課題研究体験ブース", start: "14:30", end: "16:00" },

    // --- 202 (Index 7) ---
    { id: "r105-1", venueIndex: 7, title: "CS講座「R-Union」大学生による「大学生活のすゝめ」", start: "10:30", end: "12:30" },
    { id: "r105-2", venueIndex: 7, title: "北大コラボ「もののけアート展」× 慶祥美術部", start: "13:00", end: "16:00" },

    // --- 204 (Index 8) ---
    { id: "r107-1", venueIndex: 8, title: "留学研修報告会 (モルドバ/ネパール/トビタテ)", start: "10:30", end: "12:30" },
    { id: "r107-2", venueIndex: 8, title: "APU国際交流 / 結MUSUBU / 東北メディカルツアー", start: "13:00", end: "15:00" },

    // --- 206 (Index 9) ---
    { id: "r108-1", venueIndex: 9, title: "将棋部【対局】", start: "10:30", end: "12:30" },
    { id: "r108-2", venueIndex: 9, title: "K-Tech【ゲーム体験】", start: "13:00", end: "14:30" },
    { id: "r108-3", venueIndex: 9, title: "学生団体Smile【核兵器の力とその代償】", start: "14:30", end: "16:00" },

    // --- 207 (Index 10) ---
    { id: "r202-1", venueIndex: 10, title: "課題研究 ポスターセッション", start: "10:30", end: "16:00" },

    // --- 和室 (Index 11) ---
    { id: "r201-1", venueIndex: 11, title: "自然科学部 展示発表", start: "10:30", end: "16:00" },

    // --- エントランスホール (Index 12) ---
    { id: "r204-1", venueIndex: 12, title: "中学研修報告(C) [NZ/京都/北海道]", start: "10:30", end: "11:30" },
    { id: "r204-2", venueIndex: 12, title: "高2海外研修報告(C) [豪州/その他]", start: "11:30", end: "12:30" },

];
