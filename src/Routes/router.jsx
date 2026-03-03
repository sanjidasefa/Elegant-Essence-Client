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
import ChangeRole from '../Component/dashBoard/ChangeRole';
import ManageDecorator from '../Component/dashBoard/Admin/ManageDecorator';
import TodaySchedule from '../Component/dashBoard/decorator/TodaySchedule';
import DecoratorRoute from './DecoratorRoute';
import AdminRoute from './AdminRoute';
import AllBookings from '../Component/dashBoard/Admin/AllBookings';
import ALlService from '../Component/dashBoard/Admin/ALlService';
import Footer from '../Component/Shared/Footer';
import UpdatStatus from '../Component/dashBoard/decorator/UpdatStatus';
import EarningsSummary from '../Component/dashBoard/decorator/EarningsSummary';
import Banner2 from '../Component/Home/Banner/Banner2';
import FAQ from '../Component/About/FAQ';
import Condition from '../Component/About/Condition';
import CompanyOverview from '../Component/Home/Banner/CompanyOverview';
import Blog from '../Component/Home/Banner/Blog';
import DashboardHome from '../Component/dashBoard/DashboardHome/DashboardHome';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    hydrateFallbackElement: <RouteLoder></RouteLoder> ,
    children : [
      {
        index : true,
        element : <Home></Home>,
        loader: ()=> fetch('https://elegant-essence-server-eight.vercel.app/Service').then(res=> res.json())
      },
      {
        path: '/My-Profile' ,
        element: <MyProfile></MyProfile>
      },
      {
        path : '/Service',
        element: <Service></Service>,
        loader: ()=> fetch('https://elegant-essence-server-eight.vercel.app/Service').then(res=> res.json())
      },
      {
       path : '/about' , 
       element : <About></About>
      },
      {
       path : '/Fetures' , 
       element :<Banner2></Banner2>
      },
      {
       path : '/Company-Overview' , 
       element :<CompanyOverview></CompanyOverview>
      },
      {
       path : '/Blog-Preview' , 
       element :<Blog></Blog>
      },
      {
       path : '/Faq' , 
       element :<FAQ></FAQ>
      },
      {
       path : '/Terms&Condiotions' , 
       element :<Condition></Condition>
      },
      {
       path : '/Privacy' , 
       element :<Condition></Condition>
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
       {
     path : 'Decorators-List' ,
     element : <Decorators></Decorators>
    },
    ]
  },
   {
    path : 'Dashboard' , 
    element : <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children : [
      {
        index: true,
        element : <DashboardHome></DashboardHome>
      },
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
     element : <DecoratorRoute><Projects></Projects></DecoratorRoute>
    },
    {
     path : 'Decorators-List' ,
     element : <Decorators></Decorators>
    },
    {
     path : 'Manage-Bookings' ,
     element : <AdminRoute><BookingManage></BookingManage></AdminRoute>
    },
    {
     path : 'handle-User-to-decorator' ,
     element : <ChangeRole></ChangeRole>
    },
    {
     path : 'Manage-Decorator' ,
     element : <AdminRoute><ManageDecorator></ManageDecorator></AdminRoute>
    },
    {
     path : 'Todays-Schedule' ,
     element : <DecoratorRoute><TodaySchedule></TodaySchedule></DecoratorRoute>
    },
    {
     path : 'All-Bookigns' ,
     element : <DecoratorRoute><AllBookings></AllBookings></DecoratorRoute>
    },
    {
     path : 'All-Service' ,
     element : <DecoratorRoute><ALlService></ALlService></DecoratorRoute>
    },
    {
     path : 'Update-Service-Status' ,
     element : <DecoratorRoute><UpdatStatus></UpdatStatus></DecoratorRoute>
    },
    {
     path : 'Earning-Summary' ,
     element : <DecoratorRoute><EarningsSummary></EarningsSummary></DecoratorRoute>
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
{
  path : '/footer',
  element: <Footer></Footer>
},
])
export default router;