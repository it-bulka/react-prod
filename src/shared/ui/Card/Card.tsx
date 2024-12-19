import { PropsWithChildren, HTMLAttributes } from 'react'

import classnames from '@/shared/libs/classnames/classnames'

import cls from './Card.module.scss'

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string
  theme?: CardTheme
  max?: boolean
}

export const Card = ({
  className,
  children,
  theme = CardTheme.NORMAL,
  max,
   ...rest
}: PropsWithChildren<CardProps>) => {
  return (
    <div className={classnames(cls.card, { [cls.max]: !!max }, [className, cls[theme]])} {...rest}>
      {children}
    </div>
  )
}
