import {
  getArticlesPageIsLoading,
  getArticlesPageError,
  getArticlesPageView,
  getArticlesPageNum,
  getArticlesPageLimit,
  getArticlesPageHasMore
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

describe('getArticlesPageNum', () => {
  it('should return set page', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        page: 2
      }
    }

    expect(getArticlesPageNum(state as StateSchema)).toBe(2)
  })

  it('should work with empty state and return default value 1', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticlesPageNum(state as StateSchema)).toBe(1)
  })
})

describe('getArticlesPageLimit', () => {
  it('should return set limit', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        limit: 4
      }
    }

    expect(getArticlesPageLimit(state as StateSchema)).toBe(4)
  })

  it('should work with empty state and return default value 9', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticlesPageLimit(state as StateSchema)).toBe(9)
  })
})

describe('getArticlesPageHasMore', () => {
  it('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        hasMore: true
      }
    }

    expect(getArticlesPageHasMore(state as StateSchema)).toBe(true)
  })

  it('should return false', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        hasMore: false
      }
    }

    expect(getArticlesPageHasMore(state as StateSchema)).toBe(false)
  })

  it('should work with empty state and return false', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticlesPageHasMore(state as StateSchema)).toBe(false)
  })
})
