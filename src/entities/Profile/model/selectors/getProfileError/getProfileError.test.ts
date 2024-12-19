import { StateSchema } from '@/app/providers/StoreProvider'
import { DeepPartial } from '@/shared/types/DeepPartial'

import { getProfileError } from './getProfileError'

describe('getProfileError', () => {
  it('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error'
      }
    }

    expect(getProfileError(state as StateSchema)).toEqual('error')
  })

  it('should return undefined if there no profile', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileError(state as StateSchema)).toEqual(undefined)
  })
})
