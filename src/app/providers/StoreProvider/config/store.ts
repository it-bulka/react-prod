import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { userReducers } from 'entities/User/model/slice/userSlice'
import { useDispatch, useStore } from 'react-redux'
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager'
import { ReducerManager, StateSchema } from './StateSchema'

export const createStore = () => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    user: userReducers
  }

  const reducerManager = createReducerManager(rootReducer)
  const store = configureStore({
    devTools: __IS_DEV__,
    reducer: reducerManager.reduce,
    preloadedState: {}
  })

  // @ts-ignore
  store.reduceManager = reducerManager
  return store
}

export type AppStore = ReturnType<typeof createStore> & {
  reduceManager: ReducerManager
}
export type RootState = ReturnType<typeof createStore>['getState']
export type AppDispatch = ReturnType<typeof createStore>['dispatch']
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppStore = useStore.withTypes<AppStore>()
