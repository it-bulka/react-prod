import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
import classnames from '@/shared/libs/classnames/classnames'
import { DynamicModuleLoader, ReducersList } from '@/shared/libs/components/DynamicModalLoader'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { Text, TextTheme } from '@/shared/ui/Text/ui/Text'

import cls from './LoginForm.module.scss'

import {
  getLoginError, getLoginIsLoading, getLoginPassword, getLoginUsername
} from '../../model/selectors'
import { loginByUserName } from '../../model/services/loginByUsername/loginByUserName'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

export interface LoginFormProps {
  className?: string
  withFocus?: boolean,
  onSuccess: () => void
}
const LoginForm = memo(({ className, withFocus, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation()
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

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classnames(cls.loginForm, {}, [className])} data-testid="login-form">
        <Text title={t('auth form')} />
        {error && <Text text={t('uncorrect username or password')} theme={TextTheme.ERROR} />}
        <Input
          focus={withFocus}
          type="text"
          className={cls.input}
          placeholder={t('set_username')}
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          type="text"
          className={cls.input}
          placeholder={t('set_password')}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          theme={ThemeButton.OUTLINE}
          className={cls.loginBtn}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('log_in')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm
