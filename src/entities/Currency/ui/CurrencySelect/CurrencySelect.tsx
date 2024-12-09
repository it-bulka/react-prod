import { useTranslation } from 'react-i18next'
import { useCallback, memo } from 'react'
import classnames from '@/shared/libs/classnames/classnames'
import { Currency } from '@/shared/const/common'
import { ListBox } from '@/shared/ui/Popups/components/ListBox/ListBox'

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
    <ListBox
      className={classnames('', {}, [className])}
      label={t('specify the currency')}
      items={options}
      onChange={onChangeHandler}
      value={value}
      defaultValue={t('specify the currency')}
      readonly={readOnly}
      direction="top"
    />
  )
})

CurrencySelect.displayName = 'CurrencySelect'
