import {
 Listbox as HListbox, ListboxButton, ListboxOption, ListboxOptions, Field, Label
} from '@headlessui/react'
import { memo, ReactNode, Fragment } from 'react'

import classnames from '@/shared/libs/classnames/classnames'

import cls from './ListBox.module.scss'

import { Button } from '../../../Button/Button'
import popupCls from '../../styles/popup.module.scss'

export interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

type DropdownDirection = 'top' | 'bottom'

interface ListBoxProps {
  className?: string
  items?: ListBoxItem[]
  value?: string
  defaultValue?: string
  onChange: (value: string) => void
  readonly?: boolean
  direction?: DropdownDirection
  label?: string
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  bottom: cls.optionsBottom,
  top: cls.optionsTop
}

/**
 * @deprecated
 */
export const ListBox = memo(({
  className,
  items,
  value,
  defaultValue,
  onChange,
  readonly,
  direction = 'bottom',
  label
}: ListBoxProps) => {
  const optionsClasses = [mapDirectionClass[direction]]

  return (
    <Field className={cls.listBox}>
      {label && <Label>{`${label}>`}</Label>}
      <HListbox
        disabled={readonly}
        value={value}
        onChange={onChange}
        as="div"
        className={classnames(cls.listBox, {}, [className, popupCls.popup])}
      >
        <ListboxButton as="div" className={cls.trigger}>
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </ListboxButton>
        <ListboxOptions
          anchor={direction}
          className={classnames(cls.options, {}, optionsClasses)}
        >
          {items?.map(item => (
            <ListboxOption
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ focus, selected }) => (
                <li
                  className={classnames(cls.item,{
                    [popupCls.active]: focus,
                    [cls.selected]: selected,
                    [popupCls.disabled]: !!item.disabled
                  })}
                >
                  {item.content}
                </li>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </HListbox>
    </Field>
  )
})

ListBox.displayName = 'ListBox'
