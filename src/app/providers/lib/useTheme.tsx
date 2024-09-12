import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from 'app/providers/lib/ThemeContext';
import { useCallback, useContext } from 'react';

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme?.(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }, [theme])


  return { theme, toggleTheme };
}