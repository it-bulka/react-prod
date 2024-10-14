import { type FC, useCallback } from 'react'
import classnames from 'shared/libs/classnames/classnames'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState'
import { Text, TextTheme } from 'shared/ui/Text/ui/Text'
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice'
import { loginByUserName } from 'features/AuthByUsername/model/services/loginByUserName'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
  withFocus?: boolean
}

export const LoginForm: FC<LoginFormProps> = ({ className, withFocus }) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const {
    username, password, error, isLoading
  } = useSelector(getLoginState)

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
  )
}
