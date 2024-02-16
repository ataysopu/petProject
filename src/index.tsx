import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import {} from 'redux-devtools-extension';
import { ToastContainer } from 'react-toastify';
import { App } from './App';

import 'styles/fonts.css';
import 'styles/reset.css';
import 'styles/toastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer position="top-center" />
    </Provider>
  </React.StrictMode>
);