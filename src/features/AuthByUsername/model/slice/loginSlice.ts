import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { loginByUserName } from '../services/loginByUsername/loginByUserName'
import { LoginSchema } from '../types/loginSchema'

const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: ''
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loginByUserName.pending, state => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginByUserName.fulfilled, state => {
        state.isLoading = false
      })
      .addCase(loginByUserName.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const {
  actions: loginActions,
  reducer: loginReducer
} = loginSlice
