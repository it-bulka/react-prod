import { FC, lazy } from 'react'

import { withSuspense } from '@/shared/libs'

const SettingsPageLazy: FC = lazy(() => import('./SettingsPage'))
export const SettingsPageAsync = withSuspense(SettingsPageLazy)
