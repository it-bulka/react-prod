import { createContext } from 'react'

/* eslint-disable no-unused-vars */
export enum Theme {
  LIGHT = 'app_theme_light',
  DARK = 'app_theme_dark',
}
/* eslint-disable no-unused-vars */

export interface IThemeContext {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContext>({})
export const LOCAL_STORAGE_THEME_KEY = 'theme'
