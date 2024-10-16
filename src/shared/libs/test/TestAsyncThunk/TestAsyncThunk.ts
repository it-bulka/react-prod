import axios, { AxiosStatic } from 'axios'
import { StateSchema } from 'app/providers/StoreProvider'
import { AsyncThunkAction } from '@reduxjs/toolkit'

jest.mock('axios')
const mockedAxios = jest.mocked(axios, { shallow: false })

type ActionCreatorType<Return, Arg, RejectedValue>
  = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>
  getState: () => StateSchema
  api: jest.MockedFunctionDeep<AxiosStatic>

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
    this.api = mockedAxios
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg)
    const result = await action(
      this.dispatch,
      this.getState,
      { api: this.api }
    )

    return result
  }
}
