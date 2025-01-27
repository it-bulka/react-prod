import { memo } from 'react'

import AppSvg from '@/shared/assets/icons/app-image.svg'
import classnames from '@/shared/libs/classnames/classnames'

import cls from './AppLogo.module.scss'

import { HStack } from '../../../deprecated/Stack'

interface AppLogoProps {
  className?: string
  size?: number
}

export const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => {
  return (
    <HStack
      max
      justify="center"
      className={classnames(cls.appLogoWrapper, {}, [className])}
    >
      <div className={cls.gradientBig} data-testid="AppLogo.gradientBig" />
      <div className={cls.gradientSmall} data-testid="AppLogo.gradientSmall" />
      <AppSvg
        width={size}
        height={size}
        color="black"
        className={cls.appLogo}
        data-testid="AppLogo.svg"
      />
    </HStack>
  )
})
