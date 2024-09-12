import classnames from 'shared/libs/classnames/classnames';
import cls from './NavBar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavBarProps {
  className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <nav className={classnames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
          Головна
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to="/about">
          Про сайт
        </AppLink>
      </div>
    </nav>
  )
}