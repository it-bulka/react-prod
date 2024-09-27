import classnames from 'shared/libs/classnames/classnames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import cls from './NavBar.module.scss'

interface NavBarProps {
  className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation()
  return (
    <nav className={classnames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
          {t('main')}
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to="/about">
          {t('about')}
        </AppLink>
      </div>
    </nav>
  )
}
