import {
  Menu, MenuButton, MenuItems, MenuItem
} from '@headlessui/react'
import classnames from 'shared/libs/classnames/classnames'
import { Fragment, ReactNode } from 'react'
import { DropdownDirection } from 'shared/types/ui'
import { AppLink } from '../AppLink/AppLink'
import cls from './Dropdown.module.scss'

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  direction?: DropdownDirection;
  trigger: ReactNode;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top right': cls.optionsTopRight,
  'top left': cls.optionsTopLeft
}

export const Dropdown = (props: DropdownProps) => {
  const {
    className, trigger, items, direction = 'bottom right'
  } = props

  const menuClasses = [mapDirectionClass[direction]]

  return (
    <Menu as="div" className={classnames(cls.dropdown, {}, [className])}>
      <MenuButton className={cls.btn}>
        {trigger}
      </MenuButton>
      <MenuItems className={classnames(cls.menu, {}, menuClasses)}>
        {items.map(item => {
          const content = ({ active }: {active: boolean}) => (
            <button
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={classnames(cls.item, { [cls.active]: active })}
            >
              {item.content}
            </button>
          )

          if (item.href) {
            return (
              <MenuItem as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </MenuItem>
            )
          }

          return (
            <MenuItem as={Fragment} disabled={item.disabled}>
              {content}
            </MenuItem>
          )
        })}

      </MenuItems>
    </Menu>
  )
}