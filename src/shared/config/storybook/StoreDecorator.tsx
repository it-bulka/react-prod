import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider'
import { DecoratorFactory } from 'shared/config/storybook/types'
import { ReducersList } from 'shared/libs/components/DynamicModalLoader'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from 'entities/Profile'
import { DeepPartial } from 'shared/types/DeepPartial'
import { StateSchema } from 'app/providers/StoreProvider'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer
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
