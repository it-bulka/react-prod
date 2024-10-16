import { createBrowserRouter } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { HomePage } from 'pages/Home'
import { ProfilePage } from 'pages/ProfilePage'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
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
        element: <ProfilePage />
      }
    ]
  }
])
