import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Donation from './components/Donation.jsx';
import DonationDetails from './components/DonationDetails.jsx';
import Statistic from './components/Statistic.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: () => fetch('/donation.json')
  },
  {
    path: '/donation',
    element: <Donation />
  },
  {
    path: '/donation-details/:id',
    element: <DonationDetails />,
    loader: () => fetch('/donation.json')
  },
  {
    path: '/statistic',
    element: <Statistic />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
