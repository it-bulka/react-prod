import { StateSchema } from '@/app/providers/StoreProvider'
import { DeepPartial } from '@/shared/types/DeepPartial'

import { getLoginError } from './getLoginError'

describe('getLoginError', () => {
  it('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error'
      }
    }
    expect(getLoginError(state as StateSchema)).toEqual('error')
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginError(state as StateSchema)).toEqual(undefined)
  })
})
