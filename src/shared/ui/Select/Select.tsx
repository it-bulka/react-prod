import {
 ChangeEvent, useCallback, useMemo
} from 'react'
import classnames from '@/shared/libs/classnames/classnames'
import cls from './Select.module.scss'

export interface SelectOption<T extends string> {
  value: T
  content: string
}

interface SelectProps<T extends string> {
  className?: string
  label?: string
  options?: SelectOption<T>[]
  value?: T
  onChange?: (value: T) => void
  readOnly?: boolean
}

export const Select = <T extends string>({
  className,
  label,
  options,
  value,
  onChange,
  readOnly = false
}: SelectProps<T>) => {
  const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T)
  }, [])

  const optionsList = useMemo(() => options?.map(opt => (
    <option
      className={cls.option}
      value={opt.value}
      key={opt.value}
    >
      {opt.content}
    </option>
  )), [options])

  return (
    <div className={classnames(cls.wrapper, {}, [className])}>
      {label && (
        <span className={cls.label}>
          {`${label}>`}
        </span>
      )}
      <select
        disabled={readOnly}
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  )
}
