import { memo } from 'react'
import classnames from 'shared/libs/classnames/classnames'
import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
}

export const Text = memo(({
  className,
  text,
  title,
  theme= TextTheme.PRIMARY,
  align = TextAlign.LEFT
}: TextProps) => {
  return (
    <div
      data-testid="text"
      className={classnames(cls.text, {}, [className, cls[theme], cls[align]])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
})

Text.displayName = 'Text'
