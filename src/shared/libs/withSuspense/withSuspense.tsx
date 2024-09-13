import { Suspense, ComponentType } from "react";
import { PageLoader } from 'shared/ui/PageLoader/ui/PageLoader';

export const withSuspense = <P extends object>(WrappedComponent: ComponentType<P>) => (props: P) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <WrappedComponent {...props} />
    </Suspense>
  )
}