import { createAsyncThunk } from '@reduxjs/toolkit'

import { StateSchema, ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'

import { ValidateProfileError } from '../../const/const'
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData'
import { Profile } from '../../types/profile'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>(
  'profile/updateProfileData',
  async (_, { getState, rejectWithValue, extra }) => {
    const formData = getProfileFormData(getState() as StateSchema)
    const errors = validateProfileData(formData)

    if(errors.length) return rejectWithValue(errors)

    try {
      const res = await extra.api.put<Profile>(`/profile${formData?.id}`, formData)
      return res.data
    } catch {
      return rejectWithValue([ValidateProfileError.NO_DATA])
    }
  }
)
