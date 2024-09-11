import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

import App from './App.jsx'
import Resume from './pages/ResumePage.jsx'
import Project from './pages/PortfolioPage.jsx'
import Home from './pages/HomePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'portfolio',
        element: <Project />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router ={router} />
)
