import { createContext } from 'react'

/* eslint-disable no-unused-vars */
export enum Theme {
  LIGHT = 'app_theme_light',
  DARK = 'app_theme_dark',
  ORANGE = 'app_theme_orange',
}
/* eslint-disable no-unused-vars */

export interface IThemeContext {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const LOCAL_STORAGE_THEME_KEY = 'theme'
export const ThemeContext = createContext<IThemeContext>({
  theme: Theme.DARK
})
