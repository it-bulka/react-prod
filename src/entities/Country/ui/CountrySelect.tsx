import { useCallback, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Country } from '@/shared/const/common'
import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups/components/ListBox/ListBox'
import { ListBox } from '@/shared/ui/redesigned/Popups'

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

  const props = {
    className,
    label: t('specify the country'),
    items: options,
    onChange: onChangeHandler,
    defaultValue: options[1].value,
    value,
    readonly,
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

CountrySelect.displayName = 'CountrySelect'
