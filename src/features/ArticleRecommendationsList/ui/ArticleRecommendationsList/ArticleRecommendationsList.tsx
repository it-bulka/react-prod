import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleList } from '@/entities/Article'
import classnames from '@/shared/libs/classnames/classnames'
import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'
import { toggleFeatures } from '@/shared/libs/features/lib/toggleFeatures'
import { Text as TextDeprecated, TextSize } from '@/shared/ui'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

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
  const { isLoading, data: articles, error } = useGetArticleRecommendationsListQuery(7)

  if (!articles || error) {
    return null
  }

  const redesignedWrapperStyle = toggleFeatures({
    name: 'isAppRedesigned',
    off: () => ({}),
    on: () => ({
      align: 'stretch',
      max: true,
      gap: '16'
    })
  })

  return (
    <VStack
      className={classnames('', {}, [className])}
      data-testid="ArticleRecommendationsList"
      {...redesignedWrapperStyle}
    >
      <ToggleFeaturesComponent
        feature="isAppRedesigned"
        on={<Text title={t('recommendations')} size="l" bold />}
        off={<TextDeprecated size={TextSize.L} title={t('recommendations')} />}
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
