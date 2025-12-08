import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Component/Home/Home';
import Login from '../Component/Auth/Login';
import SignUp from '../Component/Auth/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children : [
      {
        index : true,
        element : <Home></Home>
      }
    ]
  },
{
  path: '/login',
  element: <Login></Login>
},
{
  path: '/SignUp',
  element: <SignUp></SignUp>
},
])
export default router;