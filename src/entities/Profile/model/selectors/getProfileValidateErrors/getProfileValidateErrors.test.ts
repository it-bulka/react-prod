import { DeepPartial } from 'shared/types/DeepPartial'
import { StateSchema } from 'app/providers/StoreProvider'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'
import { getProfileValidateErrors } from './getProfileValidateErrors'

describe('getProfileValidateErrors', () => {
  it('should work succesfully', () => {
    const errors = [ValidateProfileError.NO_DATA]
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors
      }
    }

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors)
  })

  it('should return undefined if no state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined)
  })
})
