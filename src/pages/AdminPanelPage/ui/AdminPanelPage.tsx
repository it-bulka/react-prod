import { useTranslation } from 'react-i18next'

const AdminPanelPage = () => {
  const { t } = useTranslation('adminPanel')
  return (
    <section className="page-wrapper">
      {t('Admin Panel Page')}
    </section>
  )
}

export default AdminPanelPage
