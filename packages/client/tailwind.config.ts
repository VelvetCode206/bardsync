import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: { sans: ['Poppins', ...fontFamily.sans] },
      colors: {
        light: {
          bg: '#eeeeee',
          text: '#111111',
        },
        dark: {
          bg: '#111111',
          text: '#eeeeee',
        },
        retro: {
          bg: '#FBD0A6',
          text: '#007096',
        },
      },
    },
  },
  plugins: [],
}
