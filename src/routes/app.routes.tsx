import { createBrowserRouter } from 'react-router-dom';

import { SiderBarLayout } from '../layouts/sidebar/sidebar.layout';

import { ErrorPage } from '../pages/error/error.page';
import { InstallationPage } from '../pages/overview/installation/installation.page';
import { StylePropsPage } from '../pages/overview/style-props/style-props.page';

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
      {
        path: '/style-props',
        element: <StylePropsPage />,
      },
    ],
  },
]);
