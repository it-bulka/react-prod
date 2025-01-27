import React, {
  memo, useState, useRef, useCallback, KeyboardEvent
} from 'react'

import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
// eslint-disable-next-line fsd-checker-gen/layer-imports
import { saveJsonSettings } from '@/entities/User'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import OrangeIcon from '@/shared/assets/icons/theme-orange.svg'
import classnames from '@/shared/libs/classnames/classnames'
import { useTheme } from '@/shared/libs/const/useTheme'
import { Theme } from '@/shared/libs/context/ThemeContext'

import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

interface IThemeOption {
  value: Theme,
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

const IThemes: Record<Theme, IThemeOption> = {
  [Theme.DARK]: { value: Theme.DARK, Icon: DarkIcon },
  [Theme.LIGHT]: { value: Theme.LIGHT, Icon: LightIcon },
  [Theme.ORANGE]: { value: Theme.ORANGE, Icon: OrangeIcon }
}

const themes: IThemeOption[] = Object.values(IThemes)

/**
 * @deprecated
 */
export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLUListElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const dispatch = useAppDispatch()

  const IconComponent = theme && IThemes[theme].Icon

  const handleToggle = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [setIsOpen])

  const handleSelect = useCallback((value: Theme) => {
    toggleTheme(
      value,
      newTheme => {
        dispatch(saveJsonSettings({ theme: newTheme }))
      }
    )
    setIsOpen(false)
  }, [toggleTheme, setIsOpen])

  const dropdownStyle = useCallback(() => {
    if (!dropdownRef.current || !containerRef.current) return {}

    const dropdownRect = dropdownRef.current.getBoundingClientRect()
    const containerRect = containerRef.current.getBoundingClientRect()
    const spaceBelow = window.innerHeight - containerRect.bottom

    return {
      top: spaceBelow < dropdownRect.height ? `-${dropdownRect.height + 5}px` : '100%',
      pointerEvent: isOpen ? 'auto' : 'none',
      opacity: isOpen ? 1 : 0
    }
  }, [isOpen])

  const onKeyDown = useCallback((e: KeyboardEvent<HTMLElement>, cb: (a?: any) => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      cb()
    }
  }, [])

  return (
    <div className={classnames(cls.themeswitcher, {}, [className])} ref={containerRef}>
      <div
        onClick={handleToggle}
        onKeyDown={e => onKeyDown(e, handleToggle)}
        role="button"
        tabIndex={0}
      >
        {IconComponent && <IconComponent />}
      </div>
      <ul className={cls.options} ref={dropdownRef} style={dropdownStyle()}>
        {themes.map(item => (
          <li
            key={item.value}
            onClick={() => handleSelect(item.value)}
            onKeyDown={e => onKeyDown(e, () => handleSelect(item.value))}
            role="option"
            tabIndex={0}
            aria-label={item.value}
            aria-selected={item.value === theme}
          >
            <item.Icon />
          </li>
        ))}
      </ul>
    </div>
  )
})

ThemeSwitcher.displayName = 'ThemeSwitcher'
