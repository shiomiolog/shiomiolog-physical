// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'phys-dark': '#000b1e',    // ベースの深い紺色
        'phys-surface': '#001533', // カードやサイドバー
        'phys-cyan': '#00d1ff',    // アクセントのシアン
        'phys-text': '#e2e8f0',    // メインのテキスト
        'phys-sub': '#94a3b8',     // サブテキスト
      },
      fontFamily: {
        // 全体の文章（日本語含む）用
        sans: ['"Noto Sans JP"', 'sans-serif'],
        // ID、ドメイン、プログラム、ログ用
        mono: ['"Source Code Pro"', 'monospace'],
      },
    },
  },
}