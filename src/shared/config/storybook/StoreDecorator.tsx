import { StateSchema } from '@/app/providers/StoreProvider'
import { StoreProvider } from '@/app/providers/StoreProvider/ui/StoreProvider'
import { articleDetailsReducer } from '@/entities/Article/testing'
import { profileReducer } from '@/entities/Profile/testing'
import { loginReducer } from '@/features/AuthByUsername/testing'
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing'
import { articlesPageReducer } from '@/pages/ArticlesPage/testing'
import { ReducersList } from '@/shared/libs/components/DynamicModalLoader'

import { DecoratorFactory } from './types'
import { DeepPartial } from '../../types/DeepPartial'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articlesPage: articlesPageReducer,
  articleDetailsPage: articleDetailsPageReducer
}

interface IStoreDecorator {
  state?: DeepPartial<StateSchema>
  asyncReducers?: ReducersList
}

export const StoreDecorator: DecoratorFactory<IStoreDecorator> = ({
  state,
  asyncReducers
}) => Story => {
  return (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers}}
    >
      <Story />
    </StoreProvider>
  )
}
