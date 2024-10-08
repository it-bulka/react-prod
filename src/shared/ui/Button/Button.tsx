import { type FC, ButtonHTMLAttributes } from 'react'
import classnames from 'shared/libs/classnames/classnames'
import cls from './Button.module.scss'

/* eslint-disable no-unused-vars */
export enum ThemeButton {
  MAIN = 'main',
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}
/* eslint-disable no-unused-vars */

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string,
  theme?: ThemeButton,
  square?: boolean,
  size?: ButtonSize
}
export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme = ThemeButton.MAIN,
  square = false,
  size = ButtonSize.M,
  ...rest
}) => {
  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true
  }

  return (
    <button
      type="button"
      className={classnames(cls.button, mods, [className])}
      {...rest}
    >
      {children}
    </button>
  )
}
