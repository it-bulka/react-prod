import { CSSProperties, useMemo } from 'react'

import classnames from '@/shared/libs/classnames/classnames'

import cls from './Avatar.module.scss'

import UserIcon from '../../../assets/icons/user-filled.svg'
import { AppImage } from '../AppImage'
import { Icon } from '../Icon/Icon'
import { Skeleton } from '../Skeleton/Skeleton'

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

  const fallback = <Skeleton width={size} height={size} border="50%" />

  const errorFallback = (
    <Icon width={style.width} height={style.height} Svg={UserIcon} />
  )

  return (
    <AppImage
      style={style}
      className={classnames(cls.avatar, {}, [className])}
      src={src}
      alt={alt || 'Avatar'}
      fallback={fallback}
      errorFallback={errorFallback}
    />
  )
}
