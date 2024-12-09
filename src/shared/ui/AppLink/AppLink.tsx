import { memo } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import classnames from '@/shared/libs/classnames/classnames'
import cls from './AppLink.module.scss'

/* eslint-disable no-unused-vars */
export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}
/* eslint-disable no-unused-vars */

interface AppLinkProps extends LinkProps{
  className?: string,
  theme?: AppLinkTheme
}

export const AppLink = memo(({
  to, className, children, theme = AppLinkTheme.PRIMARY, ...rest
}: AppLinkProps) => (
  <Link to={to} className={classnames(cls.appLink, { [cls[theme]]: true }, [className])} {...rest}>
    {children}
  </Link>
))

AppLink.displayName = 'AppLink'
