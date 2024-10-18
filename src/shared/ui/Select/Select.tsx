import {
 ChangeEvent, memo, useCallback, useMemo
} from 'react'
import classnames from 'shared/libs/classnames/classnames'
import cls from './Select.module.scss'

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
}

export const Select = memo(({
  className,
  label,
  options,
  value,
  onChange
}: SelectProps) => {
  const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
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
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  )
})

Select.displayName = 'Select'
