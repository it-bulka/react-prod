import { StateSchema } from '@/app/providers/StoreProvider'
import { Country, Currency } from '@/shared/const/common'
import { TestAsyncThunk } from '@/shared/libs/test/TestAsyncThunk/TestAsyncThunk'
import { DeepPartial } from '@/shared/types/DeepPartial'

import { updateProfileData } from './updateProfileData'
import { ValidateProfileError } from '../../const/const'
import { Profile } from '../../types/profile'

describe('updateProfileData', () => {
  it('should return updated profile data', async () => {
    const profileData: DeepPartial<Profile> = {
      'first': 'Iv',
      'lastname': 'G',
      'age': 29,
      'currency': Currency.UAH,
      'country': Country.Ukraine,
      'city': 'Kyiv',
      'username': 'admin'
    }

    const partialState: DeepPartial<StateSchema> = {
      profile: { form: profileData }
    }

    const thunk = new TestAsyncThunk(updateProfileData, partialState)
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData}))

    const result = await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toEqual('fulfilled')
    expect(result.payload).toEqual(profileData)
  })

  it('should return error', async () => {
    const error = [ValidateProfileError.NO_DATA]
    const thunk = new TestAsyncThunk(updateProfileData)
    thunk.api.put.mockRejectedValue(error)

    const result = await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toEqual('rejected')
    expect(result.payload).toEqual(error)
  })
})
