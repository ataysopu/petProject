import React from 'react';
import { IGlobalAppContainerProps } from './types';
import { AppLayout, Main } from './styled';
import { Outlet } from 'react-router-dom';
import { AppHeader, Footer } from '../../components';


export const GlobalAppContainer: React.FC<IGlobalAppContainerProps> = (header, footer) => {

  return (
    <AppLayout id="app-layout">
      {header && <AppHeader />}
      <Main>
        <Outlet />
      </Main>
      {footer && <Footer />}
    </AppLayout>
  );
};