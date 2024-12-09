import { userActions } from '@/entities/User/model/slice/userSlice'
import { TestAsyncThunk } from '@/shared/libs/test/TestAsyncThunk/TestAsyncThunk'
import { loginByUserName } from './loginByUserName'

describe('LoginByUserName', () => {
  it('should login successfully', async () => {
    const userValue = { username: '123', id: '1' }

    const thunk = new TestAsyncThunk(loginByUserName)
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const result = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.dispatch).toHaveBeenNthCalledWith(2, userActions.setAuthData(userValue))
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userValue)
  })

  it('should login with error', async () => {
    const thunk = new TestAsyncThunk(loginByUserName)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('error')
  })
})
