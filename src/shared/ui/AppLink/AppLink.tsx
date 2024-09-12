import { Link, LinkProps } from 'react-router-dom';
import classnames from 'shared/libs/classnames/classnames';
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps{
  className?: string,
  theme?: AppLinkTheme
}

export const AppLink = ({ to, className, children, theme = AppLinkTheme.PRIMARY, ...rest }: AppLinkProps) => {
  return (
    <Link to={to} className={classnames(cls.appLink, { [cls[theme]]: true}, [className])} {...rest}>
      {children}
    </Link>
  )
}