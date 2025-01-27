import { Popover as HPopover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ReactNode, PropsWithChildren } from 'react'

import classnames from '@/shared/libs/classnames/classnames'
import { DropdownDirection } from '@/shared/types/ui'

import cls from './Popover.module.scss'

import { mapDirectionClass } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'

interface PopoverProps {
  className?: string
  direction?: DropdownDirection
  trigger: ReactNode
}

/**
 * @deprecated
 */
export const Popover = ({
  children,
  trigger,
  className,
  direction = 'bottom right'
}: PropsWithChildren<PopoverProps>) => {
  const menuClasses = [mapDirectionClass[direction]]

  return (
    <HPopover className={classnames('', {}, [className, popupCls.popup])}>
      <PopoverButton as="div">
        {trigger}
      </PopoverButton>
      <PopoverPanel className={classnames(cls.panel, {}, menuClasses)}>
        {children}
      </PopoverPanel>
    </HPopover>
  )
}
