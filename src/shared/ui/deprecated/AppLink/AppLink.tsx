import { forwardRef } from 'react'
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

/**
 * @deprecated
 */
export const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(({
  to, className, children, theme = AppLinkTheme.PRIMARY, ...rest
}, ref) => (
  <Link
    to={to}
    className={classnames(cls.appLink, { [cls[theme]]: true }, [className])}
    {...rest}
    ref={ref}
  >
    {children}
  </Link>
))
