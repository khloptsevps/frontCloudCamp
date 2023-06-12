// TODO: Добавить стор
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './index.scss';

import { MainPage, FormPage } from 'pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  { path: '/create', element: <FormPage /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="content">
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>,
);
