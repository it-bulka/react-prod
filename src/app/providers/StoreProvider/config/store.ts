import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { userReducers } from 'entities/User/model/slice/userSlice'
import { useDispatch, useStore } from 'react-redux'
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager'
import { api } from 'shared/api/api'
import { ReducerManager, StateSchema } from './StateSchema'

interface createStoreProps {
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
}
export const createStore = ({ initialState, asyncReducers }: createStoreProps) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducers
  }

  const reducerManager = createReducerManager(rootReducer)
  const store = configureStore({
    devTools: __IS_DEV__,
    reducer: reducerManager.reduce,
    preloadedState: initialState || {},
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api
          }
        }
      })
    }
  })

  // @ts-ignore
  store.reduceManager = reducerManager
  return store
}

export type AppStore = ReturnType<typeof createStore> & {
  reduceManager: ReducerManager
}
export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>
export type AppDispatch = ReturnType<typeof createStore>['dispatch']
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppStore = useStore.withTypes<AppStore>()
