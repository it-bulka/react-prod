import { StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'shared/types/DeepPartial'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from './articleDetails'

describe('getArticleDetailsData', () => {
  it('should return data', () => {
    const data = {
      id: '1',
      title: 'subtitle'
    }

    const state: DeepPartial<StateSchema> = {
      articleDetails: { data }
    }

    expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
  })

  it('should work with empty state data', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
  })
})

describe('getArticleDetailsError', () => {
  it('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { error: 'error' }
    }
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
  })

  it('should work with empty state data', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
  })
})

describe('getArticleDetailsIsLoading', () => {
  it('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { isLoading: true }
    }
    expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(true)
  })

  it('should work with empty state data', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(false)
  })
})
