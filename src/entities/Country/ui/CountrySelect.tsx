import classnames from 'shared/libs/classnames/classnames'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'
import { Country } from 'shared/const/common'
import { useCallback, memo } from 'react'

interface CountrySelectProps {
  className?: string
  onChange?: (value: Country) => void
  value?: Country
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.France, content: Country.France },
  { value: Country.Ukraine, content: Country.Ukraine }
]

export const CountrySelect = memo(({ className, onChange, value }: CountrySelectProps) => {
  const { t } = useTranslation()

  const onChangeHandler = useCallback((val: string) => {
    onChange?.(val as Country)
  }, [onChange])

  return (
    <Select
      className={classnames('', {}, [className])}
      label={t('specify the country')}
      options={options}
      onChange={onChangeHandler}
      value={value}
    />
  )
})

CountrySelect.displayName = 'CountrySelect'
