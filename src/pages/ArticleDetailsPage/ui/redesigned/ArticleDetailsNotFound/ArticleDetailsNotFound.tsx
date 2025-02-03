import { useTranslation } from 'react-i18next'

import cls from './ArticleDetailsNotFound.module.scss'

export const ArticleDetailsNotFound = () => {
  const { t } = useTranslation('articles')
  return (
    <div className={cls.articleDetailsPage}>
      {t('article is not found')}
    </div>
  )
}
