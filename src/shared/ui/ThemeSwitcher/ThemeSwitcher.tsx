import { memo } from 'react'
import classnames from 'shared/libs/classnames/classnames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTheme } from 'app/providers'
import { Theme } from 'app/providers/lib/ThemeContext'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'

interface ThemeSwitcherProps {
  className?: string
}
export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classnames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
})

ThemeSwitcher.displayName = 'ThemeSwitcher'
