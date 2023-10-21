import {
  createBrowserRouter,
} from "react-router-dom";

import AddProduct from "../pages/AddProduct/AddProduct";
import Cars from "../pages/Brand/cars";
import Details from "../pages/Details/Details";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Mycarts from "../pages/Mycart/Mycarts";
import Register from "../pages/Register/Register";
import Update from "../pages/Update/Update";
import PrivateRouter from "./PrivateRoute";
import Root from './Root';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/addproduct',
        element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter>
      },
      {
        path:'/cars/:brandNames',
        element: <Cars></Cars>,
        loader: ({params}) => fetch(`http://localhost:5000/car/${params.brandNames}`)
      },
      {
        path:'/login',
        element: <Login></Login>,
      },
      {
        path:'/register',
        element: <Register></Register>,
      },
      {
        path:'/update/:id',
        element: <PrivateRouter><Update></Update></PrivateRouter>,
        loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}`)
      },
      {
        path:'/details/:id',
        element: <PrivateRouter><Details></Details></PrivateRouter>,
        loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}`)
      },
      {
        path:'/mycart',
        element: <PrivateRouter><Mycarts></Mycarts></PrivateRouter>,
        loader: () => fetch(`http://localhost:5000/carts`)
      },

    ]
  },
]);

export default Router