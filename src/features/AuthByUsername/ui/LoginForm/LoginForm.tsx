import { type FC } from 'react'
import classnames from 'shared/libs/classnames/classnames'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Button } from 'shared/ui/Button/Button'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
  withFocus?: boolean
}
export const LoginForm: FC<LoginFormProps> = ({ className, withFocus }) => {
  const { t } = useTranslation()

  return (
    <div className={classnames(cls.loginForm, {}, [className])} data-testid="login-form">
      <Input
        focus={withFocus}
        type="text"
        className={cls.input}
        placeholder={t('set_username')}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t('set_password')}
      />
      <Button
        className={cls.loginBtn}
      >
        {t('log_in')}
      </Button>
    </div>
  )
}
