import { CSSProperties, useMemo } from 'react'

import classnames from '@/shared/libs/classnames/classnames'

import cls from './Avatar.module.scss'

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

export const Avatar = ({
 className, src, size, alt
}: AvatarProps) => {
  const style = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100
  }), [size])

  return (
    <img
      style={style}
      className={classnames(cls.avatar, {}, [className])}
      src={src}
      alt={alt || 'Avatar'}
    />
  )
}
