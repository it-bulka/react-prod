import { Suspense, ComponentType } from "react";

export const withSuspense = <P extends object>(WrappedComponent: ComponentType<P>) => (props: P) => {
  return (
    <Suspense fallback={<div> Loading ... </div>}>
      <WrappedComponent {...props} />
    </Suspense>
  )
}