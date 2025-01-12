import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleList } from '@/entities/Article'
import classnames from '@/shared/libs/classnames/classnames'
import { Text, TextSize } from '@/shared/ui'
import { VStack } from '@/shared/ui/Stack'

import cls from './ArticleRecommendationsList.module.scss'

import {
  useGetArticleRecommendationsListQuery
} from '../../api/aritcleRecommendationsApi'

interface ArticleRecommendationsListProps {
    className?: string
}

export const ArticleRecommendationsList = memo(({
  className
}: ArticleRecommendationsListProps) => {
  const { t } = useTranslation('articles')
  const { isLoading, data: articles, error } = useGetArticleRecommendationsListQuery(3)

  if (!articles || error) {
    return null
  }

  return (
    <VStack className={classnames('', {}, [className])} data-testid="ArticleRecommendationsList">
      <Text
        size={TextSize.L}
        title={t('recommendations')}
      />
      <ArticleList
        isLoading={isLoading}
        articles={articles}
        target="_blank"
        className={cls.recommendations}
      />
    </VStack>
  )
})

ArticleRecommendationsList.displayName = 'ArticleRecommendationsList'
