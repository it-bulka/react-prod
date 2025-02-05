import { useTranslation } from 'react-i18next'

import classnames from '@/shared/libs/classnames/classnames'
import {
  Button as ButtonDeprecated,
  Input as InputDeprecated,
  Text as TextDeprecated,
  TextTheme,
  ThemeButton
} from '@/shared/ui'

import cls from './LoginFormDeprecated.module.scss'

interface LoginFormDeprecatedProps {
  className?: string
  withFocus?: boolean,
  error?: string
  onChangeUsername: (value: string) => void
  onChangePassword: (value: string) => void
  onLoginClick: () => void
  username: string
  password: string
  isLoading?: boolean
}

export const LoginFormDeprecated = ({
  className,
  withFocus,
  error,
  onChangeUsername,
  onChangePassword,
  onLoginClick,
  username,
  password,
  isLoading
}: LoginFormDeprecatedProps) => {
  const { t } = useTranslation()

  return (
    <div className={classnames(cls.loginForm, {}, [className])} data-testid="login-form">
      <TextDeprecated title={t('auth form')} />
      {error && <TextDeprecated text={t('uncorrect username or password')} theme={TextTheme.ERROR} />}
      <InputDeprecated
        focus={withFocus}
        type="text"
        className={cls.input}
        placeholder={t('set_username')}
        onChange={onChangeUsername}
        value={username}
      />
      <InputDeprecated
        type="text"
        className={cls.input}
        placeholder={t('set_password')}
        onChange={onChangePassword}
        value={password}
      />
      <ButtonDeprecated
        theme={ThemeButton.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('log_in')}
      </ButtonDeprecated>
    </div>
  )
}
