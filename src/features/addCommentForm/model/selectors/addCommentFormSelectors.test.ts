import { StateSchema } from '@/app/providers/StoreProvider'
import { DeepPartial } from '@/shared/types/DeepPartial'

import {
  getAddCommentFormError,
  getAddCommentFormText
} from './addCommentFormSelectors'

describe('getAddCommentFormText', () => {
  it('should return text', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: { text: 'text'}
    }
    expect(getAddCommentFormText(state as StateSchema)).toEqual('text')
  })

  it('should work with no state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAddCommentFormText(state as StateSchema)).toEqual(undefined)
  })
})

describe('getAddCommentFormError', () => {
  it('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: { error: 'error'}
    }
    expect(getAddCommentFormError(state as StateSchema)).toEqual('error')
  })

  it('should work with no state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined)
  })
})
