import { TestAsyncThunk } from '@/shared/libs/test/TestAsyncThunk/TestAsyncThunk'

import { fetchNextArticlesPage } from './fetchNextArticlesPage'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('fetchNextArticlesPage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should work successfully', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true
      }
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(4)
    // expect(fetchArticlesList).toHaveBeenCalledTimes(1)
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 })
  })

  it('should not call fetchArticlesList, if no hasMore', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false
      }
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })
})
