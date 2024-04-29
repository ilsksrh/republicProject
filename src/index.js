import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import News from './News';
import Test from './Test';
import Info from './about/Info';
import LostAbout from './about/LostAbout';
import Lost from './Lost';
import About from './about/About';
import AboutPage from './about/AboutPage';
import Posts from './Posts';
import './css/main.css';
import CreatePost from './CreatePost';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Profile from './Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter(
    [
        {
          path: "/",
          element: <App />,
          children: [
            {
              path: "/home",
            },
            {
              path: "/news",
              element: <News />,
            },
            {
              path: "/post",
              element: <Posts />,
            },
            {
              path: "/",
            },
            {
              path: "/lost",
              element: <Lost />,
            },
            {
              path: "/create",
              element: <CreatePost />
            },
            {
              path: "/profile",
              element: <Profile/> 
            }
          ]
        },
        {
          path: "/about",
          element: <AboutPage />,
          children: [
            {
              path: "/about/",
              element: <About />
            },
            {
              path: "/about/info",
              element: <Info />
            },
            {
              path: "/about/lost",
              element: <LostAbout />
            }
          ]
        },
        {
          path: "/news",
          element: <News />,
          // loader: async ( {params} ) => {
          //   return (await NewsService.getNews(params.newsID)).data
          // }
        },
        {
          path: "/test",
          element: <Test />
        },
        {
          path: "/login",
          element: <SignIn/>
        }
        ,
        {
          path: "/register",
          element: <SignUp/>
        }
    ]
);

root.render(
    <RouterProvider router={routes} />
)