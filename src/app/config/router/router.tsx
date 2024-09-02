import { createBrowserRouter } from 'react-router-dom';
import { RootPage } from '../../RootPage';
import { AboutPage } from 'pages/AboutPage';
import { HomePage } from 'pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      }
    ]
  }
])