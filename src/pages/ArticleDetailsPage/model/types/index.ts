import {
  ArticleDetailsRecommendationsSchema
} from './ArticleDetailsRecommendationsSchema'
import { ArticleDetailsComments } from './ArticleDetailsCommentsSchema'

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsComments
  recommendations: ArticleDetailsRecommendationsSchema
}
