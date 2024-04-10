import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App';
import Goods from './components/Goods';
import GoodItem from './components/GoodItem';
import Page404 from './components/Page404';
import { getAllGoods, getOneGood } from './components/api';
import CreateForm from './components/CreateForm';
import EditForm from './components/EditForm';
import Login from './components/Login';
import CreateCategories from './components/CreateCategories';
import Registration from './components/Registration';

const root = ReactDOM.createRoot(document.getElementById('root'));


const routes = createBrowserRouter([
  {
    path: "/",
    element: <CreateForm />,
    errorElement: <Page404/>
  },
  {
    path: "/goods/create",
    element: <CreateForm />
  },
  {
    path: "/categories",
    element: <CreateCategories />
  },
  {
    path: "/categories/create",
    element: <CreateCategories />
  },
  {
    path: "/goods/category/:catId?",
    element: <Goods />,
  },
  {
    path: "/goods/",
    element: <Goods />,
    loader: getAllGoods,
    children: [
      {
        path: "/goods/:goodId",
        element: <GoodItem/>,
        loader: async ({params}) => {return getOneGood(params.goodId)}
      }
    ]
  },
  {
    path: "/goods/:goodId",
    element: <GoodItem />
  },
  {
    path: "/goods/:goodId/edit",
    element: <EditForm />
  },
  {
    path: "/good-item",
    element: <GoodItem />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/registration",
    element: <Registration />
  }
]);

root.render(
  <RouterProvider router={routes} />
);
