import {
  InputHTMLAttributes, SyntheticEvent, memo,
  useCallback, useRef, useState, useEffect, ChangeEvent
} from 'react'
import classnames from 'shared/libs/classnames/classnames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  autofocus?: boolean;
  focus?: boolean;
}

export const Input = memo(({
  className,
  value,
  onChange,
  autofocus ,
  placeholder,
  type = 'text',
  focus,
  ...rest
}: InputProps) => {
  const [isFocused, setFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)
  const ref = useRef<HTMLInputElement>(null)

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }, [])

  const onFocus = useCallback(() => {
    setFocused(true)
  }, [])

  const onBlur = useCallback(() => {
    setFocused(false)
  }, [])

  const onSelect = useCallback((e: SyntheticEvent<HTMLInputElement, Event>) => {
    setCaretPosition(e?.currentTarget?.selectionStart || 0)
  }, [])

  useEffect(() => {
    if (autofocus || focus) {
      setFocused(true)
      ref.current?.focus()
    }
  }, [autofocus, focus])

  return (
    <div className={classnames(cls.inputWrapper, {}, [className])} data-testid="input">
      {placeholder && (
        <p className={cls.placeholder}>
          {`${placeholder}>`}
        </p>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          spellCheck="false"
          {...rest}
        />

        {isFocused && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 8}px` }}
          />
        )}
      </div>
    </div>
  )
})

Input.displayName = 'Input'
