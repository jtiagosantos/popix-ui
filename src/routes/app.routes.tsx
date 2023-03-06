import { createBrowserRouter } from 'react-router-dom';

import { SiderBarLayout } from '../layouts/sidebar/sidebar.layout';

import { InstallationPage } from '../pages/overview/installation/installation.page';
import { ErrorPage } from '../pages/error/error.page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SiderBarLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/installation',
        element: <InstallationPage />,
      },
    ],
  },
]);
