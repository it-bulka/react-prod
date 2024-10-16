import { FC, lazy } from 'react'
import { withSuspense } from 'shared/libs'

const ProfilePageLazy: FC = lazy(() => import('./ProfilePage'))
export const ProfilePageAsync = withSuspense(ProfilePageLazy)
