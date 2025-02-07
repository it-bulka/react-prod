import { memo } from 'react'

import { ScrollToTopButton , ScrollToTopButtonProps } from '@/features/ScrollToTopButton'
import classnames from '@/shared/libs/classnames/classnames'
import { VStack } from '@/shared/ui/redesigned/Stack'

import cls from './ScrollToolbar.module.scss'

interface ScrollToolbarProps extends ScrollToTopButtonProps{
  className?: string
}

export const ScrollToolbar = memo(({
  className,
  action
}: ScrollToolbarProps) => {
  return (
    <VStack
      justify="center"
      align="center"
      max
      className={classnames(cls.scrollToolbar, {}, [className])}
    >
      <ScrollToTopButton action={action} />
    </VStack>
  )
})

ScrollToolbar.displayName = 'ScrollToolbar'
