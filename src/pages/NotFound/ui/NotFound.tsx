import { FC } from 'react'
import classnames from 'shared/libs/classnames/classnames'
import { useTranslation } from 'react-i18next'
import cls from './NotFound.module.scss'

export const NotFound: FC = () => {
  const { t } = useTranslation()
  return (
    <div className={classnames(cls.NotFoundPage)}>
      {t('notFound')}
    </div>
  )
}
