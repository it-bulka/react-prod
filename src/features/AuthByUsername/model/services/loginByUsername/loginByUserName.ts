import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { userActions } from 'entities/User/model/slice/userSlice'

interface LoginByUsernameProps {
  username: string
  password: string
}

type ThunkConfig = { rejectValue: string }

export const loginByUserName = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData)
      if(!response.data) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      thunkAPI.dispatch(userActions.setAuthData(response.data))
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('error')
    }
  }
)
