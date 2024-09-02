import { createBrowserRouter } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { HomePage } from 'pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: 'about',
        element: <AboutPage />
      }
    ]
  }
])