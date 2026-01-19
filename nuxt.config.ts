// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      // 提供されたウェイト（100-900）をすべてカバー
      'Noto+Sans+JP': [100, 400, 500, 700, 900],
      // Source Code Pro の Normal と Italic を両方定義
      'Source+Code+Pro': {
        wght: [200, 400, 700, 900],
        ital: [200, 400, 700, 900]
      }
    },
    display: 'swap',
    download: true, // パフォーマンス向上のため
    inject: true
  },

  app: {
    head: {
      title: '汐音みお | Physical Portal',
      htmlAttrs: { lang: 'ja' },
      bodyAttrs: {
        class: 'bg-[#000b1e] text-[#e2e8f0] selection:bg-[#00d1ff] selection:text-[#000b1e]'
      }
    }
  }
})