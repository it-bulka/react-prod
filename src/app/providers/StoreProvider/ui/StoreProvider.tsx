import { Provider } from 'react-redux'
import { PropsWithChildren } from 'react'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { DeepPartial } from '@/shared/types/DeepPartial'
import { StateSchema } from '@/app/providers/StoreProvider'
import { createStore } from '../config/store'

interface StoreProviderProps {
  // for storybook and testing
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: PropsWithChildren<StoreProviderProps>) => {
  const { children, initialState, asyncReducers } = props

  const store = createStore({
    initialState: initialState as StateSchema,
    asyncReducers: asyncReducers as ReducersMapObject<StateSchema>
  })

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
