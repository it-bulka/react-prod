import { lazy, FC } from 'react'
import { withSuspense } from 'shared/libs'

const HomeLazy: FC = lazy(() => import('./Home'))
export const HomeAsync = withSuspense(HomeLazy)
