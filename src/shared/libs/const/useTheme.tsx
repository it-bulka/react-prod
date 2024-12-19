import { useCallback, useContext, useEffect } from 'react'

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../context/ThemeContext'

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = useCallback((updatedTheme: Theme) => {
    const newTheme = updatedTheme || Theme.DARK
    document.body.className = newTheme
    setTheme?.(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }, [theme])

  useEffect(() => {
    if(document.body.className === '') {
      document.body.className = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT
    }
  }, [])

  return { theme, toggleTheme }
}
