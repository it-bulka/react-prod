import { createSlice } from '@reduxjs/toolkit'
import { ProfileSchema } from 'entities/Profile/model/types/profile'

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {}
})

export const {
  actions: profileActions,
  reducer: profileReducer
} = profileSlice
