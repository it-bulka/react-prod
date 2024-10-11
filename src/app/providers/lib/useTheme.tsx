import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from 'app/providers/lib/ThemeContext'
import { useCallback, useContext, useEffect } from 'react'

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = useCallback(() => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
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
