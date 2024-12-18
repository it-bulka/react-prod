import { FC, Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './config/router/router'
import './styles/index.scss'
import { ThemeProvider } from './providers/ui/ThemeProvider'
import { PageLoader } from '@/shared/ui/PageLoader/ui/PageLoader'
import ErrorBoundary from './providers/ErrorBoundary/ErrorBoundary'
import { StoreProvider } from './providers/StoreProvider/ui/StoreProvider'

import '@/shared/config/i18n/i18n'

export const App: FC = () => (
  <ErrorBoundary>
    <StoreProvider>
      <ThemeProvider>
        <Suspense fallback={<PageLoader />}>
          <RouterProvider router={router} />
        </Suspense>
      </ThemeProvider>
    </StoreProvider>
  </ErrorBoundary>
)
