import { Provider } from 'react-redux'
import { PropsWithChildren } from 'react'
import { createStore } from '../config/store'

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const store = createStore()
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
