import {
  PropsWithChildren, FC, useState, useMemo, useEffect
} from 'react'
import { useSelector } from 'react-redux'

import { useJsonSettings , getUserAuthData } from '@/entities/User'
import { ThemeContext, LOCAL_STORAGE_THEME_KEY, Theme } from '@/shared/libs/context/ThemeContext'

const defaultTheme: Theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme)
  const { theme: bdTheme } = useJsonSettings()
  const authData = useSelector(getUserAuthData)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  useEffect(() => {
    function addTheme() {
      document.body.classList.add(bdTheme! || theme)
    }

    if (document.body.className === '') {
      addTheme()
      return
    }
    document.body.classList.forEach(cls => {
      if (cls.startsWith('app_theme')) {
        if (cls === bdTheme) return
        document.body.classList.remove(cls)
        addTheme()
      }

      addTheme()
    })
  }, [bdTheme, authData])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
