import React, { memo } from 'react'
import classnames from '@/shared/libs/classnames/classnames'
import cls from './Icon.module.scss'

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
    inverted?: boolean
}

export const Icon = memo(({
  className,
  Svg,
  inverted
}: IconProps) => {
    return (
      <Svg className={classnames(inverted ? cls.inverted : cls.icon, {}, [className])} />
    )
})
