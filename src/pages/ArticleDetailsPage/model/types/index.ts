import { ArticleDetailsComments } from './ArticleDetailsCommentsSchema'
import {
  ArticleDetailsRecommendationsSchema
} from './ArticleDetailsRecommendationsSchema'

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsComments
  recommendations: ArticleDetailsRecommendationsSchema
}
