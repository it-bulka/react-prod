import { ButtonHTMLAttributes, memo } from 'react'

import classnames from '@/shared/libs/classnames/classnames'

import cls from './Button.module.scss'

export type ButtonVariant = 'clear' | 'outline';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string,
  variant?: ButtonVariant,
  square?: boolean,
  size?: ButtonSize
  fullWidth?: boolean
  disabled?: boolean;
}
export const Button = memo(({
  className,
  children,
  variant = 'outline',
  square = false,
  size = 'm',
  disabled = false,
  fullWidth = false,
  ...rest
}: ButtonProps) => {
  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth
  }

  return (
    <button
      type="button"
      className={classnames(cls.button, mods, [className, cls[variant], cls[size]])}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'
