import { createAsyncThunk } from '@reduxjs/toolkit'
import { Profile } from 'entities/Profile'
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig>(
  'profiles/fetchProfileData',
  async (_, { rejectWithValue, extra }) => {
    try {
      const res = await extra.api.get<Profile>('/profile')
      return res.data
    } catch {
      return rejectWithValue('error')
    }
  }
)
