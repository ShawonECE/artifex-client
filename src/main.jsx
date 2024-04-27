import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import ErrorPage from './components/ErrorPage';
import Crafts from './components/Crafts';
import MyCrafts from './components/MyCrafts';
import AddCraft from './components/AddCraft.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/crafts",
        element: <Crafts />,
      },
      {
        path: "/my-crafts",
        element: <MyCrafts />,
      },
      {
        path: "/add-craft",
        element: <AddCraft />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
