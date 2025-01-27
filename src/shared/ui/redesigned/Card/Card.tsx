import { PropsWithChildren, HTMLAttributes, ReactNode } from 'react'

import classnames from '@/shared/libs/classnames/classnames'

import cls from './Card.module.scss'

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  variant?: CardVariant
  max?: boolean
  padding?: CardPadding
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
  max,
  padding = '8',
   ...rest
}: PropsWithChildren<CardProps>) => {
  const paddingClass = mapPaddingToClass[padding]

  return (
    <div
      className={
        classnames(cls.card, { [cls.max]: !!max }, [className, cls[variant], paddingClass])
      }
      {...rest}
    >
      {children}
    </div>
  )
}
