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
import Private from './components/Private';
import Login from './components/Login';
import Register from './components/Register.jsx';
import Update from './components/Update';

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
        loader: () => fetch(`https://artifex-server.vercel.app/sculptures`)
      },
      {
        path: "/crafts-by-category/:category",
        element: <CraftByCategory />,
        loader: ({params}) => fetch(`https://artifex-server.vercel.app/sculptures/categories/${params.category}`)
      },
      {
        path: "/details/:id",
        element: <Private><CraftDetails /></Private>,
        loader: ({params}) => fetch(`https://artifex-server.vercel.app/sculptures/${params.id}`)
      },
      {
        path: "/my-crafts",
        element: <Private><MyCrafts /></Private>,
      },
      {
        path: "/add-craft",
        element: <Private><AddCraft /></Private>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/update/:id",
        element: <Private><Update /></Private>,
        loader: ({params}) => fetch(`https://artifex-server.vercel.app/sculptures/${params.id}`)
      }
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
