import { useCallback, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Currency } from '@/shared/const/common'
import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups/components/ListBox/ListBox'
import { ListBox } from '@/shared/ui/redesigned/Popups'

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

  const props = {
    className,
    label: t('specify the currency'),
    items: options,
    onChange: onChangeHandler,
    value,
    defaultValue: options[0].value,
    readonly: readOnly,
    direction: 'top' as const
  }

  return (
    <ToggleFeaturesComponent
      feature="isAppRedesigned"
      off={<ListBoxDeprecated {...props} />}
      on={<ListBox {...props} />}
    />

  )
})

CurrencySelect.displayName = 'CurrencySelect'
