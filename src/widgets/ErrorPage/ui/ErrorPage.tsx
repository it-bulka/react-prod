import { type FC } from 'react'
import classnames from 'shared/libs/classnames/classnames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import cls from './ErrorPage.module.scss'

interface ErrorPageProps {
  className?: string
}
export const ErrorPage: FC<ErrorPageProps> = ({ className = '' }) => {
  const { t } = useTranslation()

  // eslint-disable-next-line no-restricted-globals
  const reloadPage = () => location.reload()

  return (
    <div className={classnames(cls.errorPage, {}, [className])}>
      <p>{t('errorPage')}</p>
      <Button onClick={reloadPage}>
        {t('reload')}
      </Button>
    </div>
  )
}
