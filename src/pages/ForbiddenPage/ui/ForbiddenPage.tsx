import { useTranslation } from 'react-i18next'

const ForbiddenPage = () => {
  const { t } = useTranslation()

  return (
    <section className="page-wrapper">
      {t('no access for page')}
    </section>
  )
}

export default ForbiddenPage
