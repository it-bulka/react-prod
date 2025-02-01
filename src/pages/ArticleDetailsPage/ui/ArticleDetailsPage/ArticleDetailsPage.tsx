import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'

import { ArticleDetails } from '@/entities/Article'
import { ArticleRating } from '@/features/ArticleRating'
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList'
import classnames from '@/shared/libs/classnames/classnames'
import { DynamicModuleLoader, ReducersList } from '@/shared/libs/components/DynamicModalLoader'
import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'
import { Card } from '@/shared/ui'

import cls from './ArticleDetailsPage.module.scss'

import { articleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
import {
  ArticleDetailsPageHeader
} from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articles')
  const params = useParams<{ id: string }>()

  if(!params.id) {
    return (
      <div className={classnames(cls.ArticleDetailsPage, {}, [className])}>
        {t('article is not found')}
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classnames(cls.articleDetailsPage, {}, ['page-wrapper', className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={params.id} />
        <ToggleFeaturesComponent
          feature="isArticleRatingEnabled"
          on={<ArticleRating articleId={params.id} />}
          off={<Card>{t('Rating will be soon!')}</Card>}
        />
        <ArticleRecommendationsList />
        <ArticleDetailsComments id={params.id} />
      </div>
    </DynamicModuleLoader>
  )
})

ArticleDetailsPage.displayName = 'ArticleDetailsPage'

export default ArticleDetailsPage
