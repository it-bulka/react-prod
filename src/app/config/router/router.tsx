import { createBrowserRouter } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { HomePage } from 'pages/Home'
import { ProfilePage } from 'pages/ProfilePage'
import { ArticlesPageAsync } from 'pages/ArticlesPage'
import { ArticleDetailsPageAsync } from 'pages/ArticleDetailsPage'
import { AdminPanelPage } from 'pages/AdminPanelPage'
import { ForbiddenPage } from 'pages/ForbiddenPage'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { ProtectedRoutes } from 'app/providers/ProtectedRoutes/ProtectedRoutes'
import { UserRole } from 'entities/User'
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
        path: `${RoutePath.profile}:id`,
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
      },
      {
        path: `${RoutePath.article_details}:id`,
        element: (
          <ProtectedRoutes>
            <ArticleDetailsPageAsync />
          </ProtectedRoutes>
        )
      },
      {
        path: RoutePath.admin_panel,
        element: (
          <ProtectedRoutes roles={[UserRole.MANAGER, UserRole.ADMIN]}>
            <AdminPanelPage />
          </ProtectedRoutes>
        )
      },
      {
        path: RoutePath.forbidden,
        element: <ForbiddenPage />
      }
    ]
  }
])
