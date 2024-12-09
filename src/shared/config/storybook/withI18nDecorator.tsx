import { useEffect, Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Decorator } from '@storybook/react'
import i18n from '@/shared/config/i18n/i18n'

i18n.on('languageChanged', locale => {
  const direction = i18n.dir(locale)
  document.dir = direction
})

export const withI18nDecorator: Decorator = (Story, context) => {
  const { locale } = context.globals

  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [locale])

  return (
    <Suspense fallback={<div>Loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  )
}
