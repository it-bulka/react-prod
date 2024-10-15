import { memo, useCallback } from 'react'
import classnames from 'shared/libs/classnames/classnames'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { Text, TextTheme } from 'shared/ui/Text/ui/Text'
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { loginByUserName } from 'features/AuthByUsername/model/services/loginByUserName'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModalLoader'
import {
  getLoginError, getLoginIsLoading, getLoginPassword, getLoginUsername
} from 'features/AuthByUsername/model/selectors'
import cls from './LoginForm.module.scss'

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

export interface LoginFormProps {
  className?: string
  withFocus?: boolean
}
const LoginForm = memo(({ className, withFocus }: LoginFormProps) => {
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

  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({ username, password }))
  }, [dispatch, password, username])

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
        />
        <Input
          type="text"
          className={cls.input}
          placeholder={t('set_password')}
          onChange={onChangePassword}
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
