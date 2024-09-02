import { FC, Suspense } from 'react'
import { RouterProvider } from 'react-router-dom';
import { router } from 'app/config/router/router';

export const App: FC = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};