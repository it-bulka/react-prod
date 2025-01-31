import { ButtonHTMLAttributes, memo, ReactNode } from 'react'

import classnames from '@/shared/libs/classnames/classnames'

import cls from './Button.module.scss'

export type ButtonVariant = 'clear' | 'outline' | 'filled';

export type ButtonSize = 's' | 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string,
  variant?: ButtonVariant
  square?: boolean
  size?: ButtonSize
  fullWidth?: boolean
  disabled?: boolean
  addonLeft?: ReactNode
  addonRight?: ReactNode
}
export const Button = memo(({
  className,
  children,
  variant = 'outline',
  square = false,
  size = 's',
  disabled = false,
  fullWidth = false,
  addonLeft,
  addonRight,
  ...rest
}: ButtonProps) => {
  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
    [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight)
  }

  return (
    <button
      type="button"
      className={classnames(cls.button, mods, [className, cls[variant], cls[size]])}
      disabled={disabled}
      {...rest}
    >
      {addonLeft && <span className={cls.addonLeft}>{addonLeft}</span>}
      {children}
      {addonRight && <span className={cls.addonRight}>{addonRight}</span>}
    </button>
  )
})

Button.displayName = 'Button'
