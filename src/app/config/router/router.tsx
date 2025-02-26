import { createBrowserRouter } from 'react-router-dom'

import { UserRole } from '@/entities/User'
import { AboutPage } from '@/pages/AboutPage'
import { AdminPanelPage } from '@/pages/AdminPanelPage'
import { ArticleDetailsPageAsync } from '@/pages/ArticleDetailsPage'
import { ArticleEditPageAsync } from '@/pages/ArticleEditPage'
import { ArticlesPageAsync } from '@/pages/ArticlesPage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { HomePage } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'
import { ProfilePage } from '@/pages/ProfilePage'
import { SettingsPage } from '@/pages/SettingsPage'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'

import { ProtectedRoutes } from '../../providers/ProtectedRoutes/ProtectedRoutes'
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
      },
      {
        path: RoutePath.article_details,
        element: (
          <ProtectedRoutes>
            <ArticleDetailsPageAsync />
          </ProtectedRoutes>
        )
      },
      {
        path: RoutePath.article_create,
        element: (
          <ProtectedRoutes>
            <ArticleEditPageAsync />
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
        path: RoutePath.settings,
        element: (
          <ProtectedRoutes roles={[UserRole.MANAGER, UserRole.ADMIN]}>
            <SettingsPage />
          </ProtectedRoutes>
        )
      },
      {
        path: RoutePath.forbidden,
        element: <ForbiddenPage />
      },
      {
        path: RoutePath.not_found,
        element: <NotFound />
      }
    ]
  }
])
