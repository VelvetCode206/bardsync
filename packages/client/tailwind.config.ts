import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: { extend: { fontFamily: { sans: ['Poppins', ...fontFamily.sans] } } },
  plugins: [],
}
