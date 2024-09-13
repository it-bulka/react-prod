import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(ChainedBackend)
  .init({
    fallbackLng: 'en',
    debug: __IS_DEV__,
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      backends: [
        LocalStorageBackend,
        HttpBackend
      ],
      backendOptions: [
        //options for LocalStorageBackend
        {
          //TODO: uncommit after finish project
          /*expirationTime: 1 * 24 * 60 * 60 * 1000,  // 2 days
          versions: {
            en: 'v1.0',
            uk: 'v1.0',
          }*/
        },
        //options for HttpBackend
        { loadPath: '/locales/{{lng}}/{{ns}}.json' }
      ]
    }
  })


export default i18n