import { rtkApi } from '@/shared/api/rtkApi'
import { Article } from '@/entities/Article'

const aritcleRecommendationsApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getArticleRecommendationsList: build.query<Article[], number>({
      query: limit => ({
        url: '/articles',
        params: {
          _limit: limit
      }
      })
    })
  }),
  overrideExisting: false
})

export const { useGetArticleRecommendationsListQuery } = aritcleRecommendationsApi
