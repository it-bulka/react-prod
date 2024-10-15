import { StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'shared/types/DeepPartial'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername', () => {
  it('should return username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'username'
      }
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('username')
  })

  it('should return empty string when username is not added', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
