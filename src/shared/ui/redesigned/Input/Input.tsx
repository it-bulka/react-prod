import React, {
  InputHTMLAttributes,
  memo,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react'

import classnames, { Mods } from '@/shared/libs/classnames/classnames'

import cls from './Input.module.scss'

import { HStack } from '../Stack'
import { Text } from '../Text/ui/Text'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly' | 'size'
>

type InputSize = 's' | 'm' | 'l'

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  label?: string
  onChange?: (value: string) => void
  autofocus?: boolean
  readonly?: boolean
  addonLeft?: ReactNode
  addonRight?: ReactNode
  size?: InputSize
}

export const Input = memo(({
  className,
  value,
  label,
  onChange,
  type = 'text',
  placeholder,
  autofocus,
  readonly = false,
  addonLeft,
  addonRight,
  size = 'm',
  ...otherProps
}: InputProps) => {
  const ref = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autofocus])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(readonly) return
    onChange?.(e.target.value)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.focused]: isFocused,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight)
  }

  const input = (
    <div className={classnames(cls.inputWrapper, mods, [className, cls[size]])} data-testid="input">
      {addonLeft && <div className={cls.addonLeft} data-testid="addonLeft">{addonLeft}</div>}
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={readonly}
        placeholder={placeholder}
        {...otherProps}
      />
      {addonRight && <div className={cls.addonRight} data-testid="addonRight">{addonRight}</div>}
    </div>
  )

  if (label) {
    return (
      <HStack max gap="8">
        <Text text={label} className={cls.label} />
        {input}
      </HStack>
    )
  }

  return input
})
