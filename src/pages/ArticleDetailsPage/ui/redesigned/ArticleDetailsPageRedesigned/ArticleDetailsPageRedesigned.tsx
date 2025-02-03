import { ArticleRating } from '@/features/ArticleRating'
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList'
import { StickyContentLayout } from '@/shared/lauouts/StickyContentLayout'
import { VStack } from '@/shared/ui/redesigned/Stack'

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
        <VStack gap="16" max>
          <DetailsContainer />
          <ArticleRating articleId={id} />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      )}
      right={<AdditionalInfoContainer />}
    />
  )
}
