import { ArticleRating } from '@/features/ArticleRating'
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList'
import { StickyContentLayout } from '@/shared/lauouts/StickyContentLayout'
import { Card } from '@/shared/ui/redesigned/Card/Card'
import { VStack } from '@/shared/ui/redesigned/Stack'

import cls from './ArticleDetailsPageRedesigned.module.scss'

import { ArticleDetailsComments } from '../../ArticleDetailsComments/ArticleDetailsComments'
import {
  AdditionalInfoContainer
} from '../AdditionalInfoContainer/AdditionalInfoContainer'
import { DetailsContainer } from '../DetailsContainer/DetailsContainer'

interface ArticleDetailsPageRedesignedProps {
  id: string,
}
export const ArticleDetailsPageRedesigned = ({ id}: ArticleDetailsPageRedesignedProps) => {
  return (
    <StickyContentLayout
      content={(
        <Card className={cls.articleDetailsPage} border="round-l" padding="24">
          <VStack gap="16" max>
            <DetailsContainer />
            <ArticleRating articleId={id} />
            <ArticleRecommendationsList />
            <ArticleDetailsComments id={id} />
          </VStack>
        </Card>
      )}
      right={<AdditionalInfoContainer />}
    />
  )
}
