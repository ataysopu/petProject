import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { APP_LINKS } from './links';

const GlobalAppPage = React.lazy(() => import('pages/globalAppPage'));
const AppRoot = React.lazy(() => import('pages/root'));
const ProfilePage = React.lazy(() => import('pages/profile'));
const WishlistPage = React.lazy(() => import('pages/wishlist'));
const CartPage = React.lazy(() => import('pages/cart'));

export type RouteType = RouteObject & {
  breadcrumb?: string
}

interface RouteObjectExtended extends Omit<RouteType, 'children'> {
  children?: RouteType[];
}


export const routes: RouteObjectExtended[] = [
  {
    path: APP_LINKS.app_root,
    element: <GlobalAppPage />,
    children: [
      {
        path: APP_LINKS.app_root,
        element: <AppRoot />,
        breadcrumb: 'Главная'
      },
      {
        path: APP_LINKS.profile,
        element: <ProfilePage />,
        breadcrumb: 'Профиль'
      },
      {
        path: APP_LINKS.Wishlist,
        element: <WishlistPage />,
        breadcrumb: 'Избранное'
      },
      {
        path: APP_LINKS.cart,
        element: <CartPage />,
        breadcrumb: 'Корзина'
      }
    ]
  }
];

export const AppRoutes = createBrowserRouter(routes as RouteType[]);