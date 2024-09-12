import { type FC, ButtonHTMLAttributes } from 'react'
import cls from './Button.module.scss'
import classnames from 'shared/libs/classnames/classnames';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string,
  theme?: ThemeButton
}
export const Button: FC<ButtonProps> = ({ className, children, theme, ...rest }) => {

  return (
    <button
      type='button'
      className={classnames(cls.button, {}, [className])}
      {...rest}
    >
      {children}
    </button>
  )
}