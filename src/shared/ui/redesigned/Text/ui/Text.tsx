import { memo } from 'react'

import classnames from '@/shared/libs/classnames/classnames'

import cls from './Text.module.scss'

export type TextVariant = 'primary' | 'error' | 'accent'

export type TextAlign = 'right' | 'left' | 'center'

export type TextSize = 's' | 'm' | 'l'

interface TextProps {
  className?: string
  title?: string
  text?: string
  variant?: TextVariant
  align?: TextAlign
  size?: TextSize
  bold?: boolean,
  semiBold?: boolean,
  'data-testid'?: string
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToClass: Record<TextSize, string> = {
  s: 'size_s',
  m: 'size_m',
  l: 'size_l'
}

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  s: 'h3',
  m: 'h2',
  l: 'h1'
}

export const Text = memo(({
  className,
  text,
  title,
  variant = 'primary',
  align ='left',
  size = 's',
  bold = false,
  semiBold = false,
  'data-testid': dataTestId = 'Text'
}: TextProps) => {
  const HeaderTag = mapSizeToHeaderTag[size]
  const sizeClass = mapSizeToClass[size]

  return (
    <div
      data-testid="text"
      className={classnames(
        cls.text,
        { [cls.bold]: bold, [cls.semiBold]: semiBold },
        [className, cls[variant], cls[align], cls[sizeClass]]
      )}
    >
      {title && <HeaderTag className={cls.title} data-testid={`${dataTestId}.Header`}>{title}</HeaderTag>}
      {text && <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>{text}</p>}
    </div>
  )
})

Text.displayName = 'Text'
