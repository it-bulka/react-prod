import { useCallback, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Country } from '@/shared/const/common'
import classnames from '@/shared/libs/classnames/classnames'
import { ListBox } from '@/shared/ui/deprecated/Popups/components/ListBox/ListBox'

interface CountrySelectProps {
  className?: string
  onChange?: (value: Country) => void
  value?: Country
  readonly?: boolean
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.France, content: Country.France },
  { value: Country.Ukraine, content: Country.Ukraine }
]

export const CountrySelect = memo(({
  className,
  onChange,
  value,
  readonly
}: CountrySelectProps) => {
  const { t } = useTranslation()

  const onChangeHandler = useCallback((val: string) => {
    onChange?.(val as Country)
  }, [onChange])

  return (
    <ListBox
      className={classnames('', {}, [className])}
      label={t('specify the country')}
      items={options}
      onChange={onChangeHandler}
      defaultValue={t('specify the country')}
      value={value}
      readonly={readonly}
      direction="top"
    />
  )
})

CountrySelect.displayName = 'CountrySelect'
