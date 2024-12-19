import { StateSchema } from '@/app/providers/StoreProvider'
import { DeepPartial } from '@/shared/types/DeepPartial'

import {
  getArticleRecommendationsIsLoading,
  getArticleRecommendationsError
} from './recommendations'

describe('getArticleRecommendations', () => {
  it('should return set isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        recommendations: { isLoading: true }
      }
    }

    expect(getArticleRecommendationsIsLoading(state as StateSchema)).toBe(true)
  })

  it('should work no state and return false', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticleRecommendationsIsLoading(state as StateSchema)).toBe(false)
  })
})

describe('getArticleRecommendationsError', () => {
  it('should return set error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        recommendations: { error: 'error' }
      }
    }

    expect(getArticleRecommendationsError(state as StateSchema)).toBe('error')
  })

  it('should work no state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticleRecommendationsError(state as StateSchema)).toBe(undefined)
  })
})
