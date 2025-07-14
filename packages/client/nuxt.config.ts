import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  srcDir: 'src',
  typescript: { tsConfig: { extends: resolve(dirname(fileURLToPath(import.meta.url)), '../../tsconfig.base.json') } },
})
