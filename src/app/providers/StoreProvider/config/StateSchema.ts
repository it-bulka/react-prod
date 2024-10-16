import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema'
import { ProfileSchema } from 'entities/Profile'
import {
  ReducersMapObject, UnknownAction, Reducer
} from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'

export interface StateSchema {
  user: UserSchema
  // async reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema
type ReducerReturn = StateSchema | Reducer<StateSchema, UnknownAction, {}>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: UnknownAction) => ReducerReturn
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export type ThunkConfig = {
  rejectValue: string
  extra: ThunkExtraArg
}
