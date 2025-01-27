import { memo, CSSProperties } from 'react'

import classnames from '@/shared/libs/classnames/classnames'

import cls from './Skeleton.module.scss'

interface SkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  border?: string
}

/**
 * @deprecated
 */
export const Skeleton = memo(({
  className,
  height,
  width,
  border
}: SkeletonProps) => {
  const style: CSSProperties = {
    height,
    width,
    borderRadius: border
  }
  return (
    <div
      className={classnames(cls.skeleton, {}, [className])}
      style={style}
    />
  )
})
