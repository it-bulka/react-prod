import classnames from 'shared/libs/classnames/classnames'
import { PropsWithChildren, HTMLAttributes } from 'react'
import cls from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string
}

export const Card = ({ className, children, ...rest }: PropsWithChildren<CardProps>) => {
  return (
    <div className={classnames(cls.card, {}, [className])} {...rest}>
      {children}
    </div>
  )
}
