import React from 'react';
import { Spinner } from './components/spinner';
import { GlobalStyle } from './styles/global';
import { RouterProvider } from 'react-router-dom';
import { AppRoutes } from './routes/router';


export const App = () => {

  return (
    <React.Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <RouterProvider router={AppRoutes} />
    </React.Suspense>
  );
};