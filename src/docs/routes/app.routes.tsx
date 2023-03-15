import { createBrowserRouter } from 'react-router-dom';

import { SiderBarLayout } from '../layouts/sidebar/sidebar.layout';

import { ErrorPage } from '../pages/error/error.page';

import { InstallationPage } from '../pages/overview/installation/installation.page';
import { StylePropsPage } from '../pages/overview/style-props/style-props.page';
import { GlobalStylesPage } from '../pages/overview/global-styles/global-styles.page';

import { ButtonPage } from '../pages/components/button/button.page';
import { SpinnerPage } from '../pages/components/spinner/spinner.page';

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
      {
        path: '/global-styles',
        element: <GlobalStylesPage />,
      },
      {
        path: '/button',
        element: <ButtonPage />,
      },
      {
        path: '/spinner',
        element: <SpinnerPage />,
      },
    ],
  },
]);
