import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Donation from './components/Donation.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  { path: '/donation', element: <Donation /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
