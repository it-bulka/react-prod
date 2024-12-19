import { StateSchema } from '@/app/providers/StoreProvider'
import { DeepPartial } from '@/shared/types/DeepPartial'

import { getProfileData } from './getProfileData'

describe('getProfileData', () => {
  it('should return data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: { first: 'Iv'}
      }
    }

    expect(getProfileData(state as StateSchema)).toEqual({ first: 'Iv'})
  })

  it('should return undefined if there no profile', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
