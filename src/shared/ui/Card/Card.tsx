import classnames from 'shared/libs/classnames/classnames'
import { PropsWithChildren, HTMLAttributes } from 'react'
import cls from './Card.module.scss'

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string
  theme?: CardTheme
}

export const Card = ({
  className,
  children,
  theme = CardTheme.NORMAL,
   ...rest
}: PropsWithChildren<CardProps>) => {
  return (
    <div className={classnames(cls.card, {}, [className, cls[theme]])} {...rest}>
      {children}
    </div>
  )
}
