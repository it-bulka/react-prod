import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProfileSchema, Profile } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const initialState: ProfileSchema = {
  readOnly: true,
  isLoading: false,
  error: undefined,
  data: undefined
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readOnly = action.payload
    },
    cancelEdit: state => {
      state.readOnly = true
      state.form = state.data
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.data,
        ...state.form,
        ...action.payload
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProfileData.pending, state => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchProfileData.fulfilled, (
        state,
        action: PayloadAction<Profile>
      ) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(updateProfileData.pending, state => {
        state.isLoading = true
      })
      .addCase(updateProfileData.fulfilled, (
        state,
        action: PayloadAction<Profile>
      ) => {
        state.isLoading = false
        state.data = action.payload
        state.form = action.payload
        state.readOnly = true
      })
      .addCase(updateProfileData.rejected, state => {
        state.isLoading = false
      })
  }
})

export const {
  actions: profileActions,
  reducer: profileReducer
} = profileSlice
