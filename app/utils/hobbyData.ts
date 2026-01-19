// app/utils/hobbyData.ts
export const hobbyCategories = [
  {
    category: "Hardware & Gadgets",
    items: [
      {
        name: "Custom PC & Servers",
        description: "自作PCのビルドおよび自宅サーバーの運用。ハードウェアの選定からインフラ構築までをトータルで楽しんでいます。",
      },
      {
        name: "Gadgets",
        description: "周辺機器やモバイルデバイスの試行。秋葉原を主な拠点として、効率的な作業環境を支える道具を収集しています。",
        details: [
          { label: "Main Field", value: "秋葉原 (Akihabara)" }
        ]
      }
    ]
  },
  {
    category: "Travel, Food & Style",
    items: [
      {
        name: "Travel & Gastronomy",
        description: "国内各地の探訪と食文化の体験。ミルクレープやお寿司など、層の重なりや構造の美しい食べ物を好みます。",
        details: [
          { label: "Favorites", value: "ミルクレープ、お寿司" }
        ]
      },
      {
        name: "Fashion & Accessories",
        description: "自分の物理的な装いを整えること。かわいい服やアクセサリーを探索し、個人のスタイルを構築することを好みます。",
      }
    ]
  },
  {
    category: "Gaming (Logic & Exploration)",
    items: [
      {
        name: "Digital Games",
        description: "論理的な試行錯誤や、システムへの適応を楽しむジャンルを中心にプレイしています。",
        details: [
          { label: "Roguelike", value: "不思議なダンジョンシリーズ" },
          { label: "Adventure", value: "逆転裁判シリーズ" },
          { label: "Simulation", value: "電車でGO! シリーズ" }
        ]
      }
    ]
  },
  {
    category: "Anime & Manga",
    items: [
      {
        name: "Favorite Works",
        description: "クリエイティブな活動やプログラマーを志す原点となった作品を中心に、その世界観を深く楽しんでいます。制作現場の熱量や、物語が描く時間の重みに感銘を受けています。",
        details: [
          { label: "Origin", value: "NEW GAME!" },
          { label: "Favorite", value: "葬送のフリーレン" }
        ]
      }
    ]
  },
  {
    category: "The Idolmaster",
    items: [
      {
        name: "THE IDOLM@STER Series",
        description: "シリーズ全体を通じたプロデュース活動。担当アイドルの「輝き」を記録しています。",
        details: [
          { label: "765PRO AS", value: "如月 千早" },
          { label: "Cinderella Girls", value: "渋谷 凛" },
          { label: "Million Live!", value: "春日 未来" },
          { label: "SideM", value: "水嶋 咲" },
          { label: "Shiny Colors", value: "大崎 甘奈、大崎 甜花" },
          { label: "Gakuen", value: "月村 手毬、花海 佑芽" }
        ]
      }
    ]
  },
  {
    category: "Blue Archive",
    items: [
      {
        name: "Blue Archive",
        description: "キヴォトスの生徒たちとの日常と、その裏に潜む物語の観測。",
        details: [
          { label: "Millennium", value: "早瀬 ユウカ" },
          { label: "Trinity", value: "仲正 イチカ、杏山 カズサ、阿慈谷 ヒフミ" }
        ]
      }
    ]
  }
];