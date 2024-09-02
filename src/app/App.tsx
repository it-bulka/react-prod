import { FC, Suspense } from 'react'
import { RouterProvider } from 'react-router-dom';
import { router } from 'app/config/router/router';
import './styles/index.scss'
import { ThemeProvider } from 'app/providers';

export const App: FC = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<div>Loading ...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
};