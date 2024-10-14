import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { userReducers } from 'entities/User/model/slice/userSlice'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { useDispatch } from 'react-redux'
import { StateSchema } from './StateSchema'

export const createStore = () => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    user: userReducers,
    loginForm: loginReducer
  }

  return configureStore({
    devTools: __IS_DEV__,
    reducer: rootReducer,
    preloadedState: {}
  })
}

export type RootState = ReturnType<typeof createStore>['getState']
export type AppDispatch = ReturnType<typeof createStore>['dispatch']
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
