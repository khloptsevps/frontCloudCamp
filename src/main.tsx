// TODO: Добавить стор
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.scss';

import { MainPage } from 'pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  { path: '/create', element: <div>Form</div> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="content">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
);
