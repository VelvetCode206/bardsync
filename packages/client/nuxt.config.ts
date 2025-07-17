import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  typescript: { tsConfig: { extends: resolve(dirname(fileURLToPath(import.meta.url)), '../../tsconfig.base.json') } },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en-US' },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        { name: 'description', content: 'This is a template Nuxt application' },
      ],
      title: 'Nuxt App',
      link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      }],
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
  ],
  eslint: { config: { standalone: false } },
  tailwindcss: {},
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ['normal', 'italic'],
    },
  },
  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons',
      },
    ],
  },
  image: {
    quality: 80,
    format: ['webp'],
    screens: {
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536,
    },
    presets: {
      avatar: {
        modifiers: {
          width: 64,
          height: 64,
        },
      },
    },
  },
  vueuse: {},
  pinia: { storesDirs: ['./app/stores/**'] },
  i18n: {
    locales: [
      {
        name: 'English',
        code: 'en',
        language: 'en-US',
        file: 'en.yaml',
      },
      {
        name: 'Português',
        code: 'pt',
        language: 'pt-BR',
        file: 'pt.yaml',
      },
    ],
    defaultLocale: 'en',
    restructureDir: false,
    langDir: 'locales',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    baseUrl: process.env.BASE_URL,
    bundle: { optimizeTranslationDirective: false },
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    storage: 'cookie',
  },
})
