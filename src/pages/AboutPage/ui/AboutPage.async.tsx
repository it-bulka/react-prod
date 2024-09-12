import { lazy, FC } from 'react';
import { withSuspense } from 'shared/libs';

const AboutPageLazy: FC = lazy(() => import('./AboutPage'));
export const AboutPageAsync = withSuspense(AboutPageLazy)