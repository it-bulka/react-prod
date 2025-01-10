import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import classnames from '@/shared/libs/classnames/classnames'

import cls from './NotFound.module.scss'

export const NotFound: FC = () => {
  const { t } = useTranslation()
  return (
    <div className={classnames(cls.NotFoundPage)} data-testid="NotFoundPage">
      {t('notFound')}
    </div>
  )
}
