import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <div>404 Not found</div>,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
