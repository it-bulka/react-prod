import axios from 'axios'
import { Dispatch } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { userActions } from 'entities/User/model/slice/userSlice'
import { loginByUserName } from './loginByUserName'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, { shallow: false })

describe('LoginByUserName', () => {
  let dispatch: Dispatch
  let getState: () => StateSchema

  beforeEach(() => {
    dispatch = jest.fn()
    getState = jest.fn()
  })

  it('should login successfully', async () => {
    const userValue = { username: '123', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
    const action = loginByUserName({ username: '123', password: '123' })
    const result = await action(dispatch, getState, undefined)

    expect(dispatch).toHaveBeenNthCalledWith(2, userActions.setAuthData(userValue))
    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(dispatch).toHaveBeenCalledTimes(3)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userValue)
  })

  it('should login with error', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const action = loginByUserName({ username: '123', password: '123' })
    const result = await action(dispatch, getState, undefined)

    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('error')
  })
})
