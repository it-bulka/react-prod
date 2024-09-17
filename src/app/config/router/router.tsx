import { createBrowserRouter } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { HomePage } from 'pages/Home'
import { RootPage } from '../../RootPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        index: true,
        element: (<HomePage />)
      },
      {
        path: 'about',
        element: <AboutPage />
      }
    ]
  }
])
