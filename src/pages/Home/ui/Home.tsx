import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const Home: FC = () => {
  const { t } = useTranslation()
  return (
    <div className="page-wrapper">
      {t('main')}
    </div>
  )
}

export default Home
