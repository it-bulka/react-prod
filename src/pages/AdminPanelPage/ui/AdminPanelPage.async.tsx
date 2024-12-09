import { lazy } from 'react'
import { withSuspense } from '@/shared/libs'

const AdminPanelPageLazy = lazy(() => import('./AdminPanelPage'))
export const AdminPanelPageAsync = withSuspense(AdminPanelPageLazy)
