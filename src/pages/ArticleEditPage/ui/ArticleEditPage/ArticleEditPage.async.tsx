import { lazy } from 'react'

import { withSuspense } from '@/shared/libs'

const ArticleEditPageLazy = lazy(() => import('./ArticleEditPage'))
export const ArticleEditPageAsync = withSuspense(ArticleEditPageLazy)
