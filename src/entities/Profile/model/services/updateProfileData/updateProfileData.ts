import { createAsyncThunk } from '@reduxjs/toolkit'
import { Profile } from 'entities/Profile'
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig>(
  'profile/updateProfileData',
  async (_, { getState, rejectWithValue, extra }) => {
    const formData = getProfileFormData(getState() as StateSchema)

    try {
      const res = await extra.api.put<Profile>('/profile', formData)
      return res.data
    } catch {
      return rejectWithValue('error')
    }
  }
)
