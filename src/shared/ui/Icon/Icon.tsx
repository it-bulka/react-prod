import React, { memo } from 'react'
import classnames from 'shared/libs/classnames/classnames'
import cls from './Icon.module.scss'

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = memo(({className, Svg}: IconProps) => {
    return (
      <Svg className={classnames(cls.icon, {}, [className])} />
    )
})
