import { Decorator } from '@storybook/react'
import { Suspense } from 'react'

export const SuspenseDecorator: Decorator = Story => (
  <Suspense fallback={<div>...</div>}>
    <Story />
  </Suspense>
)
