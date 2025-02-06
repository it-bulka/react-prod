import { useCallback, useContext } from 'react'

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../context/ThemeContext'

type SaveAction = (theme: Theme) => void
type ToggleTheme = (updatedTheme: Theme, saveAction?: SaveAction) => void

interface UseThemeResult {
  toggleTheme: ToggleTheme
  theme: Theme | undefined
}

export const setThemeStorage = (newTheme: Theme) => {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = useCallback((
    updatedTheme: Theme,
    saveAction?: SaveAction
  ) => {
    const newTheme = updatedTheme || Theme.DARK
    document.body.className = newTheme
    setTheme?.(newTheme)

    saveAction?.(newTheme)
    setThemeStorage(newTheme)
  }, [theme])

  return { theme, toggleTheme }
}
