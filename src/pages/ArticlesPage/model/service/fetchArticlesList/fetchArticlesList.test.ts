import { article } from '@/entities/Article/testing'
import { TestAsyncThunk } from '@/shared/libs/test/TestAsyncThunk/TestAsyncThunk'

import { fetchArticlesList } from './fetchArticlesList'

describe('fetchArticlesList', () => {
  it('should run successfully', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList)
    thunk.api.get.mockResolvedValue({ data: [article]})
    const result = await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual([article])
  })

  it('should run with error', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList)
    thunk.api.get.mockRejectedValue('error')
    const result = await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('error')
  })
})
