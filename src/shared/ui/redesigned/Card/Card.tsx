import { PropsWithChildren, HTMLAttributes, ReactNode } from 'react'

import classnames from '@/shared/libs/classnames/classnames'

import cls from './Card.module.scss'

export type CardVariant = 'normal' | 'outlined' | 'light'
export type CardPadding = '0' | '8' | '16' | '24'
export type CardBorder = 'round-l' | 'round-sm' | 'round-none'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  variant?: CardVariant
  max?: boolean
  padding?: CardPadding
  border?: CardBorder
}

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24'
}

export const Card = ({
  className,
  children,
  variant = 'normal',
  max = false,
  padding = '8',
  border = 'round-sm',
   ...rest
}: PropsWithChildren<CardProps>) => {
  const paddingClass = mapPaddingToClass[padding]

  return (
    <div
      className={
        classnames(
          cls.card,
          { [cls.max]: max },
          [className, cls[variant], cls[paddingClass], cls[border]]
        )
      }
      {...rest}
    >
      {children}
    </div>
  )
}
