import { memo, ReactNode } from 'react'
import { LinkProps, NavLink } from 'react-router-dom'

import classnames from '@/shared/libs/classnames/classnames'

import cls from './AppLink.module.scss'

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
  activeClassName?: string;
}

export const AppLink = memo(({
  to,
  className,
  children,
  variant = 'primary',
  activeClassName = '',
  ...otherProps
}: AppLinkProps) => {
  return (
    <NavLink
      data-testid="AppLink"
      to={to}
      className={({ isActive }) =>
        classnames('', { [activeClassName]: isActive }, [
          className,
          cls[variant]
        ])}
      {...otherProps}
    >
      {children}
    </NavLink>
  )
})
