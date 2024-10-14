import { type FC } from 'react'
import classnames from 'shared/libs/classnames/classnames'
import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
}

export const Text: FC<TextProps> = ({
  className,
  text,
  title,
  theme= TextTheme.PRIMARY
}) => {
  return (
    <div
      data-testid="text"
      className={classnames(cls.text, { [cls[theme]]: true }, [className])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
}
