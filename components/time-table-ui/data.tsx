// ▼ イベントデータ型定義
import { ReactNode } from "react";


export const CATEGORY_COLORS = {
    1: "#48c97e", // グローバル
    2: "#48cae4", // アカデミック
    3: "#f29e4c", // エンターテイメント
    4: "#0077b6", // コラボレーション
} as const;

export type EventItem = {
    id: string;
    venueIndex: number; // venues配列のインデックス (0-14)
    title: string | ReactNode;
    start: string; // "HH:MM"
    end: string;   // "HH:MM"
    colorId?: keyof typeof CATEGORY_COLORS; // 1:Global, 2:Academic, 3:Entertainment, 4:Collaboration
};

// ▼ 設定定数（レイアウト調整用）
export const CONFIG = {
    START_HOUR: 9,       // 9:00開始
    END_HOUR: 17.5,      // 17.5 = 17:30終了
    HOUR_HEIGHT: 180,    // 1時間あたりの高さ(px)
    HEADER_HEIGHT: 60,   // ヘッダーの高さ
    COLUMN_WIDTH: 200,   // 各会場カラムの幅
    TIME_COL_WIDTH: 60,  // 時間軸カラムの幅
};

export const SPACER = "\n\n";

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
    { id: "m-1", venueIndex: 0, title: "開会式典", start: "09:45", end: "10:15", colorId: 3 },
    { id: "m-2", venueIndex: 0, title: "立命館附属校\n課題研究発表会", start: "10:40", end: "11:30", colorId: 4 },
    { id: "m-3", venueIndex: 0, title: "SSH国際共同課題研究発表", start: "11:40", end: "12:30", colorId: 1 },
    { id: "m-4", venueIndex: 0, title: "第2部開会式", start: "14:00", end: "14:30", colorId: 3 },
    { id: "m-5", venueIndex: 0, title: "有志生徒バンド発表", start: "14:50", end: "16:20", colorId: 3 },
    { id: "m-6", venueIndex: 0, title: "閉会式典", start: "16:45", end: "17:15", colorId: 3 },

    // --- 中ホール (Index 1) ---
    { id: "s-1", venueIndex: 1, title: `北海道大学コラボ企画\nRising Teenage Award${SPACER}【第1部】\n開会式\nFashion部門\nPeace部門`, start: "10:30", end: "12:00", colorId: 4 },
    { id: "s-2", venueIndex: 1, title: `北海道大学コラボ企画\nRising Teenage Award${SPACER}【第2部】\nFood部門\nTraditional Culture部門`, start: "12:00", end: "14:00", colorId: 4 },
    { id: "s-3", venueIndex: 1, title: `北海道大学コラボ企画\nRising Teenage Award${SPACER}【第3部】\nSnow部門\nSports部門\n閉会式`, start: "14:30", end: "16:30", colorId: 4 },

    // --- 小ホール (Index 2) ---
    { id: "md-1", venueIndex: 2, title: "RED Talks\n弁論研究部", start: "10:30", end: "12:00", colorId: 2 },
    { id: "md-2", venueIndex: 2, title: "株式会社Progate\nCEO加藤氏講演会", start: "12:20", end: "13:20", colorId: 4 },
    { id: "md-3", venueIndex: 2, title: "生徒主催e-sports大会\nスマブラ王決定戦", start: "14:45", end: "16:30", colorId: 3 },


    // --- 特別会議場 (Index 3) ---
    { id: "sp-1", venueIndex: 3, title: "高校3年生授業\n演劇表現卒業公演", start: "10:30", end: "11:10", colorId: 3 },
    { id: "sp-2", venueIndex: 3, title: "中学演劇部\nR-EXPO特別公演", start: "11:25", end: "12:05", colorId: 3 },
    { id: "sp-3", venueIndex: 3, title: "有志生徒\n芸術発表", start: "12:30", end: "13:40", colorId: 3 },
    { id: "sp-4", venueIndex: 3, title: "有志生徒\nダンスステージ", start: "14:45", end: "16:30", colorId: 3 },

    // --- 104・105 (Index 4) ---
    { id: "en-1", venueIndex: 4, title: "中学研修報告\n【A会場】\nNZ/京都/北海道", start: "10:30", end: "11:25", colorId: 1 },
    { id: "en-2", venueIndex: 4, title: "高2海外研修報告\n【A会場】\nタイ/マレーシア/アメリカ", start: "11:35", end: "12:30", colorId: 1 },
    { id: "en-3", venueIndex: 4, title: `立命館附属校\n課題研究体験ブース${SPACER}立命館高校\n立命館宇治高校\n立命館守山高校`, start: "14:45", end: "16:30", colorId: 2 },

    // --- 107・108 (Index 5) ---
    { id: "wa-1", venueIndex: 5, title: "R-Union\n立命館大学生による\n大学生活のすゝめ", start: "10:30", end: "13:00", colorId: 4 },
    { id: "wa-2", venueIndex: 5, title: "北海道大学コラボ企画\nもののけアート展\n×\n慶祥美術部\nArt Gallery", start: "14:45", end: "16:30", colorId: 4 },

    // --- 201 (Index 6) ---
    { id: "r104-1", venueIndex: 6, title: "APU国際交流\n結MUSUBU", start: "10:30", end: "12:00", colorId: 4 },
    { id: "r104-2", venueIndex: 6, title: `囲碁将棋部\n【対局】${SPACER}K-Tech\n【ゲーム体験】`, start: "14:45", end: "16:30", colorId: 3 },

    // --- 202 (Index 7) ---
    { id: "r105-1", venueIndex: 7, title: `国際部\n留学研修報告会${SPACER}・モルドバ\n・ネパール\n・フィリピン\n・トビタテ留学JAPAN`, start: "10:30", end: "11:40", colorId: 1 },
    { id: "r105-2", venueIndex: 7, title: "東北メディカルツアー報告会", start: "11:50", end: "12:30", colorId: 2 },
    { id: "r105-3", venueIndex: 7, title: `トビタテ留学JAPAN${SPACER}学生団体Smile\n留学のススメ`, start: "14:45", end: "16:30", colorId: 1 },

    // --- 204 (Index 8) ---
    { id: "r107-1", venueIndex: 8, title: "課題研究\nポスターセッション", start: "10:30", end: "12:30", colorId: 2 },
    { id: "r107-2", venueIndex: 8, title: "自然科学部展示発表", start: "14:45", end: "16:30", colorId: 2 },

    // --- 206 (Index 9) ---
    { id: "r108-1", venueIndex: 9, title: "中学研修報告\n【B会場】\nNZ/京都/北海道", start: "10:30", end: "11:25", colorId: 1 },
    { id: "r108-2", venueIndex: 9, title: "高2海外研修報告\n【B会場】\n台湾/インドネシア/ベトナム", start: "11:35", end: "12:30", colorId: 1 },
    { id: "r108-3", venueIndex: 9, title: "ライスボールセミナー\n立命館大学院生による講演会", start: "12:40", end: "13:40", colorId: 4 },
    { id: "r108-4", venueIndex: 9, title: "クイズ研究会\n体験型発表", start: "14:45", end: "16:30", colorId: 3 },

    // --- 207 (Index 10) ---
    { id: "207-1", venueIndex: 10, title: "中学研修報告\n【C会場】\nNZ/京都/北海道", start: "10:30", end: "11:25", colorId: 1 },
    { id: "207-2", venueIndex: 10, title: "高2海外研修報告\n【C会場】\nオーストラリア/リトアニア/ガラパゴス", start: "11:35", end: "12:30", colorId: 1 },
    { id: "207-3", venueIndex: 10, title: `羽幌町チャレンジ企画\n特産品販売${SPACER}お悩み相談\n天満の部屋${SPACER}和菓子企画\n和菓子作成体験`, start: "14:45", end: "16:30", colorId: 3 },

    // --- 和室 (Index 11) ---
    { id: "r201-1", venueIndex: 11, title: "茶道部\nR-EXPOお茶会", start: "14:45", end: "16:30", colorId: 3 },

    // --- エントランスホール (Index 12)
    { id: "r204-1", venueIndex: 12, title: `協賛企業\nキャリア学習体験ブース`, start: "10:30", end: "16:30", colorId: 4 },

];
