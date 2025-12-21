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
import RouteLoder from './RouteLoder';
import ServiceDetails from '../Component/service/ServiceDetails';
import About from '../Component/About/About';
import PaymentSuccess from '../Component/dashBoard/User/Payment/PaymentSuccess';
import PaymentCanceled from '../Component/dashBoard/User/Payment/PaymentCanceled';
import Booking from '../Component/dashBoard/User/Booking';
import PaymentHistory from '../Component/dashBoard/User/PaymentHistory';
import Projects from '../Component/dashBoard/decorator/Projects';
import Decorators from '../Component/dashBoard/Admin/Decorators';
import BookingManage from '../Component/dashBoard/Admin/BookingManage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    hydrateFallbackElement: <RouteLoder></RouteLoder> ,
    children : [
      {
        index : true,
        element : <Home></Home>,
         loader: ()=> fetch('http://localhost:3000/Service').then(res=> res.json())
      },
      {
        path: '/My-Profile' ,
        element: <MyProfile></MyProfile>
      },
      {
        path : '/Service',
        element: <Service></Service>,
        loader: ()=> fetch('http://localhost:3000/Service').then(res=> res.json())
      },
      {
       path : '/about' , 
       element : <About></About>
      },
      {
        path : '/Service/:id',
        element: <ServiceDetails></ServiceDetails>,
      },
       {
       path : '/Covarage-Area-Map',
       element: <Map></Map> ,
       loader : () => fetch('Area.json').then(res=> res.json())
      },
    ]
  },
   {
    path : 'Dashboard' , 
    element : <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children : [
    { path: 'Add-Services' ,
      element: <AddServices></AddServices>
    },
    {
      path : 'payment-success' , 
      element : <PaymentSuccess></PaymentSuccess>
    },
    {
      path : 'payment-cancelled' , 
      element : <PaymentCanceled></PaymentCanceled>
    },
    {
     path : 'booking-list' ,
     element : <Booking></Booking>
    },
    {
     path : 'payment-list' ,
     element : <PaymentHistory></PaymentHistory>
    },
    {
     path : 'My-projects' ,
     element : <Projects></Projects>
    },
    {
     path : 'Decorators-List' ,
     element : <Decorators></Decorators>
    },
    {
     path : 'Manage-Bookings' ,
     element : <BookingManage></BookingManage>
    },
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