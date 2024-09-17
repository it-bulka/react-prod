import { type FC, ButtonHTMLAttributes } from 'react'
import classnames from 'shared/libs/classnames/classnames'
import cls from './Button.module.scss'

/* eslint-disable no-unused-vars */
export enum ThemeButton {
  MAIN = 'main',
  CLEAR = 'clear',
}
/* eslint-disable no-unused-vars */

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string,
  theme?: ThemeButton
}
export const Button: FC<ButtonProps> = ({
  className, children, theme = ThemeButton.MAIN, ...rest
}) => (
  <button
    type="button"
    className={classnames(cls.button, { [cls[theme]]: true }, [className])}
    {...rest}
  >
    {children}
  </button>
)
