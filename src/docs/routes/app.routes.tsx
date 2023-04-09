import { createBrowserRouter } from 'react-router-dom';

import { SiderBarLayout } from '../layouts/sidebar/sidebar.layout';

import { ErrorPage } from '../pages/error/error.page';

import { InstallationPage } from '../pages/overview/installation/installation.page';
import { StylePropsPage } from '../pages/overview/style-props/style-props.page';
import { GlobalStylesPage } from '../pages/overview/global-styles/global-styles.page';
import { CSSPropertyPage } from '../pages/overview/css-property/css-property.page';

import { BoxPage } from '../pages/components/box/box.page';
import { ButtonPage } from '../pages/components/button/button.page';
import { SpinnerPage } from '../pages/components/spinner/spinner.page';
import { StackPage } from '../pages/components/stack/stack.page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SiderBarLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/overview/installation',
        element: <InstallationPage />,
      },
      {
        path: '/overview/style-props',
        element: <StylePropsPage />,
      },
      {
        path: '/overview/global-styles',
        element: <GlobalStylesPage />,
      },
      {
        path: '/overview/css-property',
        element: <CSSPropertyPage />,
      },
      {
        path: '/components/box',
        element: <BoxPage />,
      },
      {
        path: '/components/button',
        element: <ButtonPage />,
      },
      {
        path: '/components/spinner',
        element: <SpinnerPage />,
      },
      {
        path: '/components/stack',
        element: <StackPage />,
      },
    ],
  },
]);
