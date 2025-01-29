import {
 Listbox as HListbox, ListboxButton, ListboxOption, ListboxOptions, Field, Label
} from '@headlessui/react'
import { ReactNode, Fragment, useMemo } from 'react'

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

interface ListBoxProps<T extends string> {
  className?: string
  items?: ListBoxItem[]
  value?: T
  defaultValue?: string
  onChange: (value: T) => void
  readonly?: boolean
  direction?: DropdownDirection
  label?: string
  fullWidth?: boolean
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  bottom: cls.optionsBottom,
  top: cls.optionsTop
}

export const ListBox = <T extends string>({
  className,
  items,
  value,
  defaultValue,
  onChange,
  readonly,
  direction = 'bottom',
  label,
  fullWidth
}: ListBoxProps<T>) => {
  const optionsClasses = [mapDirectionClass[direction], popupCls.menu]

  const selectedItem = useMemo(() => {
    return items?.find(item => item.value === value)
  }, [items, value])

  return (
    <Field className={cls.listBox}>
      {label && <Label>{`${label}>`}</Label>}
      <HListbox
        disabled={readonly}
        value={value}
        onChange={onChange}
        as="div"
        className={classnames(
          cls.listBox,
          { [cls.fullWidth]: !!fullWidth },
          [className, popupCls.popup]
        )}
      >
        <ListboxButton as="div" className={cls.trigger}>
          <Button disabled={readonly} variant="filled">
            {selectedItem?.content ?? defaultValue}
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
}
