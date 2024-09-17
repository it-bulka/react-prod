import { FC, Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from 'app/config/router/router'
import './styles/index.scss'
import { ThemeProvider } from 'app/providers'
import { PageLoader } from 'shared/ui/PageLoader/ui/PageLoader'

import 'shared/config/i18n/i18n'

export const App: FC = () => (
  <ThemeProvider>
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  </ThemeProvider>
)
