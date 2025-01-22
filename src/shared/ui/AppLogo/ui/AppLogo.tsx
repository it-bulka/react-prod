import { memo } from 'react'

import AppSvg from '@/shared/assets/icons/app-image.svg'
import classnames from '@/shared/libs/classnames/classnames'

import cls from './AppLogo.module.scss'

import { HStack } from '../../Stack'

interface AppLogoProps {
  className?: string;
}

export const AppLogo = memo(({ className }: AppLogoProps) => {
  return (
    <HStack
      max
      justify="center"
      className={classnames(cls.appLogoWrapper, {}, [className])}
    >
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
      <AppSvg className={cls.appLogo} />
    </HStack>
  )
})
