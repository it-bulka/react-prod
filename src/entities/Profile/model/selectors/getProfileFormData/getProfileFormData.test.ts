import { DeepPartial } from '@/shared/types/DeepPartial'
import { StateSchema } from '@/app/providers/StoreProvider'
import { getProfileFormData } from './getProfileFormData'

describe('getProfileFormData', () => {
  it('should return data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: { first: 'Iv'}
      }
    }

    expect(getProfileFormData(state as StateSchema)).toEqual({ first: 'Iv'})
  })

  it('should return undefined if there no profile', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileFormData(state as StateSchema)).toEqual(undefined)
  })
})
