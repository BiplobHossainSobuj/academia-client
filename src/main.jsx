import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './layout/Roots.jsx';
import Home from './pages/home/Home.jsx';
import ErrorPage from './pages/notFound/ErrorPage.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/login/Login.jsx';
import Registration from './pages/registration/Registration.jsx';
import ProtectedRoute from './protected/ProtectedRoute.jsx';
import AddService from './pages/addService/AddService.jsx';
import Services from './pages/services/Services.jsx';
import ServiceDetails from './pages/serviceDetails/ServiceDetails.jsx';
import Checkout from './pages/checkout/Checkout.jsx';
import ManageService from './pages/manageService/ManageService.jsx';
import UpdateService from './pages/updateService/UpdateService.jsx';
import BookedServices from './pages/bookedService/BookedServices.jsx';
import ServiceToDo from './pages/serviceToDo/ServiceToDo.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('https://academia-server-sandy.vercel.app/services')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: <ProtectedRoute><ServiceDetails></ServiceDetails></ProtectedRoute>,
        loader:({params})=>fetch(`https://academia-server-sandy.vercel.app/services/${params.id}`)
      },
      {
        path: "/addService",
        element: <ProtectedRoute><AddService></AddService></ProtectedRoute>,
      },
      {
        path: "/manageService",
        element: <ProtectedRoute><ManageService></ManageService></ProtectedRoute>,
      },
      {
        path: "/update/:id",
        element: <ProtectedRoute><UpdateService></UpdateService></ProtectedRoute>,
        loader:({params})=>fetch(`https://academia-server-sandy.vercel.app/services/${params.id}`)
      },
      {
        path: "/checkout/:id",
        element: <ProtectedRoute><Checkout></Checkout></ProtectedRoute>,
        loader:({params})=>fetch(`https://academia-server-sandy.vercel.app/services/${params.id}`)
      },
      {
        path: "/bookedService",
        element: <ProtectedRoute><BookedServices></BookedServices></ProtectedRoute>,
      },
      {
        path: "/serviceToDo",
        element: <ProtectedRoute><ServiceToDo></ServiceToDo></ProtectedRoute>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>,
)
