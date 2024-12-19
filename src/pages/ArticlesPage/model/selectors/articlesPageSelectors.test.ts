import { StateSchema } from '@/app/providers/StoreProvider'
import { ArticleView, ArticleSortField, ArticleType } from '@/entities/Article'
import { DeepPartial } from '@/shared/types/DeepPartial'

import {
  getArticlesPageIsLoading,
  getArticlesPageError,
  getArticlesPageView,
  getArticlesPageNum,
  getArticlesPageLimit,
  getArticlesPageHasMore,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageOrder,
  getArticlesPageSearch
} from './articlesPageSelectors'

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

describe('getArticlesPageSort', () => {
  it('should set sort', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        sort: ArticleSortField.VIEWS
      }
    }

    expect(getArticlesPageSort(state as StateSchema)).toBe(ArticleSortField.VIEWS)
  })

  it('should work with empty state and return ArticleSortField.CREATED', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticlesPageSort(state as StateSchema)).toBe(ArticleSortField.CREATED)
  })
})

describe('getArticlesPageType', () => {
  it('should set type', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        type: ArticleType.IT
      }
    }

    expect(getArticlesPageType(state as StateSchema)).toBe(ArticleType.IT)
  })

  it('should work with empty state and return ArticleType.ALL', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticlesPageType(state as StateSchema)).toBe(ArticleType.ALL)
  })
})

describe('getArticlesPageOrder', () => {
  it('should set order', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        order: 'desc'
      }
    }

    expect(getArticlesPageOrder(state as StateSchema)).toBe('desc')
  })

  it('should work with empty state and return asc', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticlesPageOrder(state as StateSchema)).toBe('asc')
  })
})

describe('getArticlesPageSearch', () => {
  it('should set search', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        search: 'search'
      }
    }

    expect(getArticlesPageSearch(state as StateSchema)).toBe('search')
  })

  it('should work with empty state and return empty string', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticlesPageSearch(state as StateSchema)).toBe('')
  })
})
