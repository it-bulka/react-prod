import { DeepPartial } from '@/shared/types/DeepPartial'
import { StateSchema } from '@/app/providers/StoreProvider'
import { getProfileReadonly } from './getProfileReadonly'

describe('getProfileReadonly', () => {
  it('should be just for reading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readOnly: true
      }
    }

    expect(getProfileReadonly(state as StateSchema)).toBe(true)
  })

  it('should be NOT just for reading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readOnly: false
      }
    }

    expect(getProfileReadonly(state as StateSchema)).toBe(false)
  })

  it('should work if there is no profile', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileReadonly(state as StateSchema)).toEqual(false)
  })
})
