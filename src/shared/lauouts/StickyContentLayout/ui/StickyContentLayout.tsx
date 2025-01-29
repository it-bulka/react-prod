import { memo, ReactElement } from 'react'

import classnames from '@/shared/libs/classnames/classnames'

import cls from './StickyContentLayout.module.scss'

interface StickyContentLayoutProps {
  className?: string
  left?: ReactElement
  content: ReactElement
  right?: ReactElement
}

export const StickyContentLayout = memo(({
  className,
  content,
  left,
  right
}: StickyContentLayoutProps) => {
  return (
    <div className={classnames(cls.mainLayout, {}, [className])}>
      {left && <div className={cls.left}>{left}</div>}
      <div className={cls.content}>{content}</div>
      {right && <div className={cls.right}>{right}</div>}
    </div>
  )
})
