import { useTranslation } from 'react-i18next'

import { ArticleDetails } from '@/entities/Article'
import { ArticleRating } from '@/features/ArticleRating'
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList'
import classnames from '@/shared/libs/classnames/classnames'
import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'
import { Card as CardDeprecated } from '@/shared/ui'

import cls from './ArticleDetailsPageDeprecated.module.scss'

import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
import {
  ArticleDetailsPageHeader
} from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'

interface ArticleDetailsPageDeprecatedProps {
  id: string
}
export const ArticleDetailsPageDeprecated = ({ id}: ArticleDetailsPageDeprecatedProps) => {
 const { t } = useTranslation()
  return (
    <div className={classnames(cls.articleDetailsPage, {}, ['page-wrapper'])}>
      <ArticleDetailsPageHeader />
      <ArticleDetails id={id} />
      <ToggleFeaturesComponent
        feature="isArticleRatingEnabled"
        on={<ArticleRating articleId={id} />}
        off={<CardDeprecated>{t('Rating will be soon!')}</CardDeprecated>}
      />
      <ArticleRecommendationsList />
      <ArticleDetailsComments id={id} />
    </div>
  )
}

export const ArticleDetailsPageNotFountDeprecated = () => {
  const { t } = useTranslation('articles')
  return (
    <div className={cls.articleDetailsPage}>
      {t('article is not found')}
    </div>
  )
}
