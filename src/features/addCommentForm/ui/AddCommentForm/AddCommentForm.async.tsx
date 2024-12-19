import { lazy } from 'react'

import { withSuspense } from '@/shared/libs'

const AddCommentForm = lazy(() => import('./AddCommentForm'))
export const AddCommentFormAsync = withSuspense(AddCommentForm)
