import { TestAsyncThunk } from '@/shared/libs/test/TestAsyncThunk/TestAsyncThunk'

import { fetchProfileData } from './fetchProfileData'

describe('fetchProfileData', () => {
  it('should run successfully', async () => {
    const profile = { first: 'Iv'}
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockResolvedValue({data: profile})

    const result = await thunk.callThunk('1')
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(profile)
  })

  it('should run with error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockRejectedValue('error')

    const result = await thunk.callThunk('1')
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('Failed to fetch profile data')
  })
})
