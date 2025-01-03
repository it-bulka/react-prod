import { lazy, type FC } from 'react'

import { LoginFormProps } from './LoginForm'

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => import('./LoginForm'))
