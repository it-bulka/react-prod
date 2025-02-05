import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/ui/redesigned/Button/Button'
import { Input } from '@/shared/ui/redesigned/Input/Input'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import cls from './LoginFormRedesigned.module.scss'

interface LoginFormRedesignedProps {
  error?: string
  onChangeUsername: (value: string) => void
  onChangePassword: (value: string) => void
  onLoginClick: () => void
  username: string
  password: string
  isLoading?: boolean
}

export const LoginFormRedesigned = ({
  error,
  onChangeUsername,
  onChangePassword,
  onLoginClick,
  username,
  password,
  isLoading
}: LoginFormRedesignedProps) => {
  const { t } = useTranslation()

  return (
    <VStack gap="16" data-testid="login-form">
      <Text title={t('auth form')} size="l" bold />
      {error && <Text text={t('uncorrect username or password')} variant="error" />}
      <Input
        label={t('set_username')}
        column
        type="text"
        placeholder={t('mock-name')}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        label={t('set_password')}
        column
        type="text"
        placeholder={t('mock-password')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        onClick={onLoginClick}
        disabled={isLoading}
        className={cls.btn}
      >
        {t('log_in')}
      </Button>
    </VStack>
  )
}
