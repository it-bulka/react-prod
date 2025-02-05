import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
import { DynamicModuleLoader, ReducersList } from '@/shared/libs/components/DynamicModalLoader'
import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'

import {
  getLoginError, getLoginIsLoading, getLoginPassword, getLoginUsername
} from '../../model/selectors'
import { loginByUserName } from '../../model/services/loginByUsername/loginByUserName'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { LoginFormDeprecated } from '../deprecated/LoginFormDeprecated/LoginFormDeprecated'
import { LoginFormRedesigned } from '../redesigned/LoginFormRedesigned/LoginFormRedesigned'

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

export interface LoginFormProps {
  className?: string
  onSuccess: () => void
}
const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const dispatch = useAppDispatch()
  const error = useSelector(getLoginError)
  const isLoading = useSelector(getLoginIsLoading)
  const password = useSelector(getLoginPassword)
  const username = useSelector(getLoginUsername)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUserName({ username, password }))
    if(result.meta.requestStatus === 'fulfilled') {
      onSuccess?.()
    }
  }, [dispatch, password, username, onSuccess])

  const commonProps = {
    className,
    error,
    onChangeUsername,
    onChangePassword,
    onLoginClick,
    username,
    password,
    isLoading
  }
  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <ToggleFeaturesComponent
        feature="isAppRedesigned"
        off={<LoginFormDeprecated {...commonProps} withFocus />}
        on={<LoginFormRedesigned {...commonProps} />}
      />
    </DynamicModuleLoader>
  )
})

export default LoginForm
