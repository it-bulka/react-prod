import classnames from 'shared/libs/classnames/classnames'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'
import { Currency } from 'shared/const/common'
import { useCallback, memo } from 'react'

interface CurrencySelectProps {
  className?: string
  onChange?: (value: Currency) => void
  value?: Currency
  readOnly?: boolean
}

const options = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.UAH, content: Currency.UAH }
]

export const CurrencySelect = memo(({
  className,
  onChange,
  value,
  readOnly
}: CurrencySelectProps) => {
  const { t } = useTranslation()

  const onChangeHandler = useCallback((val: string) => {
    onChange?.(val as Currency)
  }, [onChange])

  return (
    <Select
      className={classnames('', {}, [className])}
      label={t('specify the currency')}
      options={options}
      onChange={onChangeHandler}
      value={value}
      readOnly={readOnly}
    />
  )
})

CurrencySelect.displayName = 'CurrencySelect'
