import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'

import { Profile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
  'profiles/fetchProfileData',
  async (profileId, { rejectWithValue, extra }) => {
    try {
      const res = await extra.api.get<Profile>(`/profile/${profileId}`)
      return res.data
    } catch {
      return rejectWithValue('error')
    }
  }
)
