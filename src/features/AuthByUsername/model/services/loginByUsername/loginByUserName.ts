import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { User, userActions } from '@/entities/User'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUserName = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.post<User>('http://localhost:8000/login', authData)
      if(!response.data) {
        throw new Error('User not found')
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      thunkAPI.dispatch(userActions.setAuthData(response.data))
      return response.data
    } catch (e) {
      let errorMessage = 'Something went wrong'
      if (e instanceof Error) {
        errorMessage = `error: ${e.message}`
      }
      return thunkAPI.rejectWithValue(errorMessage)
    }
  }
)
