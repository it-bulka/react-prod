import { StoreProvider } from '@/app/providers/StoreProvider/ui/StoreProvider'
import { DecoratorFactory } from './types'
import { ReducersList } from '@/shared/libs/components/DynamicModalLoader'
import { loginReducer } from '@/features/AuthByUsername/testing'
import { profileReducer } from '@/entities/Profile/testing'
import { DeepPartial } from '../../types/DeepPartial'
import { StateSchema } from '@/app/providers/StoreProvider'
import { articleDetailsReducer } from '@/entities/Article/testing'
import { articlesPageReducer } from '@/pages/ArticlesPage/testing'
import { articleDetailsCommentsReducer } from '@/pages/ArticleDetailsPage/testing'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articlesPage: articlesPageReducer,
  articleDetailsPage: articleDetailsCommentsReducer
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
