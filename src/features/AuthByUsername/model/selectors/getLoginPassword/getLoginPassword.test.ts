import { StateSchema } from '@/app/providers/StoreProvider'
import { DeepPartial } from '@/shared/types/DeepPartial'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword', () => {
  it('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123pass'
      }
    }
    expect(getLoginPassword(state as StateSchema)).toEqual('123pass')
  })

  it('should return empty string when password is not added', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginPassword(state as StateSchema)).toEqual('')
  })
})
