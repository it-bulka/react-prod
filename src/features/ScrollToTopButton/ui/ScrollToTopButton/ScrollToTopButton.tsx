import { memo } from 'react'

import CircleIcon from '@/shared/assets/icons/circle-up.svg'
import { Icon } from '@/shared/ui/redesigned/Icon/Icon'

import { useScrollToTopActions } from '../../model/slice/scrollSlice'

type Action = 'virtualization' | 'window'
type Actions = Record<Action, any>

export interface ScrollToTopButtonProps {
  className?: string;
  action: Action
}

export const ScrollToTopButton = memo(({
  action,
  className
}: ScrollToTopButtonProps) => {
  const { scrollToTop } = useScrollToTopActions()

  const actions: Actions = {
    virtualization: () => scrollToTop(),
    window: () => window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const onCLick = () => {
    actions[action]()
  }

  return (
    <Icon
      Svg={CircleIcon}
      clickable
      onClick={onCLick}
      width={32}
      height={32}
      className={className}
    />
  )
})
