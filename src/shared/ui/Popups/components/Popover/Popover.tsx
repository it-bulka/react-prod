import { ReactNode, PropsWithChildren } from 'react'
import { Popover as HPopover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { mapDirectionClass } from '../../styles/consts'
import { DropdownDirection } from '@/shared/types/ui'
import classnames from '@/shared/libs/classnames/classnames'
import cls from './Popover.module.scss'
import popupCls from '../../styles/popup.module.scss'

interface PopoverProps {
  className?: string
  direction?: DropdownDirection
  trigger: ReactNode
}

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
