import { FC, Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import { PageLoader } from '@/shared/ui/deprecated/PageLoader/ui/PageLoader'
import '@/shared/config/i18n/i18n'

import { router } from './config/router/router'
import ErrorBoundary from './providers/ErrorBoundary/ErrorBoundary'
import { StoreProvider } from './providers/StoreProvider/ui/StoreProvider'
import { ThemeProvider } from './providers/ui/ThemeProvider'

import './styles/index.scss'

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
