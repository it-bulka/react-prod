import { StateSchema } from '@/app/providers/StoreProvider'
import { DeepPartial } from '@/shared/types/DeepPartial'

import { getLoginIsLoading } from './getLoginIsLoading'

describe('getLoginIsLoading', () => {
  it('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true
      }
    }
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
  })

  it('should return false', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: false
      }
    }
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
  })
})
