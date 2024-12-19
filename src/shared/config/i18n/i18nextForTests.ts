import enTranslations from '@locales/en/translation.json'
import ukTranslations from '@locales/uk/translation.json'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false
    },
    resources: {
      en: { translation: enTranslations },
      uk: { translation: ukTranslations }
    }
  })

export default i18n
