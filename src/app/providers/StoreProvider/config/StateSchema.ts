import {
  ReducersMapObject, UnknownAction, Reducer
} from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { UserSchema } from '@/entities/User'
import { LoginSchema } from '@/features/AuthByUsername'
import { ProfileSchema } from '@/entities/Profile'
import { RootState } from '@/app/providers/StoreProvider/config/store'
import { ArticleDetailsSchema } from '@/entities/Article'
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage'
import { AddCommentFormSchema } from '@/features/addCommentForm'
import { ArticlesPageSchema } from '@/pages/ArticlesPage'
import { UISchema } from '@/features/UI'
import { rtkApi } from '@/shared/api/rtkApi'

export interface StateSchema {
  user: UserSchema
  ui: UISchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
  // async reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
  articleDetailsPage?: ArticleDetailsPageSchema
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

export type ThunkConfig<T> = {
  rejectValue: T
  extra: ThunkExtraArg
  // TODO: check typing:
  // RootState typing: no match with StateSchema using getState() inside createAsyncThunk
  // impossible typing with StateSchema: no overload match with dispatch thunks
  state: RootState
}
