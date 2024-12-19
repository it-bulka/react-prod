import { lazy } from 'react'

import { withSuspense } from '@/shared/libs'

const ArticleDetailsPageLazy = lazy(() => import('./ArticleDetailsPage'))
export const ArticleDetailsPageAsync = withSuspense(ArticleDetailsPageLazy)
