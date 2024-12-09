import { DeepPartial } from '@/shared/types/DeepPartial'
import { StateSchema } from '@/app/providers/StoreProvider'
import { getProfileIsLoading } from './getProfileIsLoading'

describe('getProfileIsLoading', () => {
  it('should return isLoading true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      }
    }

    expect(getProfileIsLoading(state as StateSchema)).toBe(true)
  })

  it('should return isLoading false', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false
      }
    }

    expect(getProfileIsLoading(state as StateSchema)).toBe(false)
  })

  it('should return false if there no profile', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileIsLoading(state as StateSchema)).toBe(false)
  })
})
