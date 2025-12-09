import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Component/Home/Home';
import Login from '../Component/Auth/Login';
import SignUp from '../Component/Auth/SignUp';
import RouteError from './RouteError';
import PrivateRoute from './PrivateRoute';
import DashBoard from '../Layouts/DashBoard';
import MyProfile from '../Component/Profile/MyProfile';
import Service from '../Component/service/Service';
import AddServices from '../Component/dashBoard/decorator/AddServices';
import Map from '../Component/map/Map';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children : [
      {
        index : true,
        element : <Home></Home>
      },
      {
        path: '/My-Profile' ,
        element: <MyProfile></MyProfile>
      },
      {
        path : '/Service',
        element: <Service></Service>
      },
       {
       path : '/Covarage-Area-Map',
       element: <Map></Map> ,
       loader : () => fetch('warehouses.json').then(res=> res.json())
      },
    ]
  },
   {
    path : 'Dashboard' , 
    element : <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children : [
    { path: 'Add-Services' ,
      element: <AddServices></AddServices>
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
{
 path: '*',
 element : <RouteError></RouteError>
},
])
export default router;