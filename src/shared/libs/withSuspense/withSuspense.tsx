import { Suspense, ComponentType } from 'react'

import { PageLoader } from '@/shared/ui/deprecated/PageLoader/ui/PageLoader'

export const withSuspense = <P extends object>(WrappedComponent: ComponentType<P>) =>
  (props: P) => (
    <Suspense fallback={<PageLoader />}>
      <WrappedComponent {...props} />
    </Suspense>
  )
