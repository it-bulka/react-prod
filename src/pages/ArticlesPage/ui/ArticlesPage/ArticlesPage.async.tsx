import { lazy } from 'react'

import { withSuspense } from '@/shared/libs'

const LazyArticlesPage = lazy(() => import('./ArticlesPage'))
export const ArticlesPageAsync = withSuspense(LazyArticlesPage)
