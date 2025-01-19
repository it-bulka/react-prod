import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig , StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'

import { setJsonSettingsMutation } from '../../api/userApi'
import { getUserAuthData } from '../selectors/getUserAuthData'
import { getJsonSettings } from '../selectors/jsonSettings'
import { JsonSettings } from '../types/jsonSettings'

export const saveJsonSettings = createAsyncThunk<
  JsonSettings,
  JsonSettings,
  ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkApi) => {
  const { rejectWithValue, getState, dispatch } = thunkApi
  const userData = getUserAuthData(getState() as StateSchema)
  const currentSettings = getJsonSettings(getState() as StateSchema)

  if (!userData) {
    return rejectWithValue('')
  }

  try {
    const response = await dispatch(
      setJsonSettingsMutation({
        userId: userData.id,
        jsonSettings: {
          ...currentSettings,
          ...newJsonSettings
        }
      })
    ).unwrap()

    if (!response.jsonSettings) {
      return rejectWithValue('')
    }

    return response.jsonSettings
  } catch (e) {
    console.log(e)
    return rejectWithValue('')
  }
})
