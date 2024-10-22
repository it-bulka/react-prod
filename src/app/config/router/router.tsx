import { createBrowserRouter } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { HomePage } from 'pages/Home'
import { ProfilePage } from 'pages/ProfilePage'
import { ArticlesPageAsync } from 'pages/ArticlesPage'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { ProtectedRoutes } from 'app/providers/ProtectedRoutes/ProtectedRoutes'
import { RootPage } from '../../RootPage'

export const router = createBrowserRouter([
  {
    path: RoutePath.home,
    element: <RootPage />,
    children: [
      {
        index: true,
        element: (<HomePage />)
      },
      {
        path: RoutePath.about,
        element: <AboutPage />
      },
      {
        path: RoutePath.profile,
        element: (
          <ProtectedRoutes>
            <ProfilePage />
          </ProtectedRoutes>
        )
      },
      {
        path: RoutePath.articles,
        element: (
          <ProtectedRoutes>
            <ArticlesPageAsync />
          </ProtectedRoutes>
        )
      }
    ]
  }
])
