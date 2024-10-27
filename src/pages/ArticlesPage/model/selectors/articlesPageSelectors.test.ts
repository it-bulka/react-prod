import {
  getArticlesPageIsLoading,
  getArticlesPageError,
  getArticlesPageView
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors'
import { DeepPartial } from 'shared/types/DeepPartial'
import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleView } from 'entities/Article'

describe('getArticlesPageIsLoading', () => {
  it('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: true
      }
    }

    expect(getArticlesPageIsLoading(state as StateSchema)).toBe(true)
  })

  it('should work with empty state and return false', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticlesPageIsLoading(state as StateSchema)).toBe(false)
  })
})

describe('getArticlesPageError', () => {
  it('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        error: 'error'
      }
    }

    expect(getArticlesPageError(state as StateSchema)).toBe('error')
  })

  it('should work with empty state and return undefined', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticlesPageError(state as StateSchema)).toBe(undefined)
  })
})

describe('getArticlesPageView', () => {
  it('should return view', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        view: ArticleView.BIG
      }
    }

    expect(getArticlesPageView(state as StateSchema)).toBe(ArticleView.BIG)
  })

  it('should work with empty state and return ArticleView.SMALL', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticlesPageView(state as StateSchema)).toBe(ArticleView.SMALL)
  })
})
