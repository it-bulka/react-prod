import { StateSchema } from '@/app/providers/StoreProvider'
import { DeepPartial } from '@/shared/types/DeepPartial'

import {
  getArticleCommentsIsLoading,
  getArticleCommentsError
} from './comments'

describe('getArticleCommentsIsLoading', () => {
  it('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: { isLoading: true }
      }
    }

    expect(getArticleCommentsIsLoading(state as StateSchema)).toBe(true)
  })

  it('should work with empty state ', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticleCommentsIsLoading(state as StateSchema)).toBe(false)
  })
})

describe('getArticleCommentsError', () => {
  it('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: { error: 'error' }
      }
    }
    expect(getArticleCommentsError(state as StateSchema)).toBe('error')
  })

  it('should work with empty state ', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticleCommentsError(state as StateSchema)).toBe(undefined)
  })
})
