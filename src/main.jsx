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
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './components/AuthProvider.jsx';
import CraftDetails from './components/CraftDetails.jsx';
import CraftByCategory from './components/CraftByCategory';

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
        loader: () => fetch(`http://localhost:3000/sculptures`)
      },
      {
        path: "/crafts-by-category/:category",
        element: <CraftByCategory />,
        loader: ({params}) => fetch(`http://localhost:3000/sculptures/categories/${params.category}`)
      },
      {
        path: "/details/:id",
        element: <CraftDetails />,
        loader: ({params}) => fetch(`http://localhost:3000/sculptures/${params.id}`)
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
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
