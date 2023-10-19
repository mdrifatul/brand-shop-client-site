import {
  createBrowserRouter,
} from "react-router-dom";

import AddProduct from "../pages/AddProduct/AddProduct";
import Cars from "../pages/Brand/cars";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
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
        path:'/cars',
        element: <Cars></Cars>,
        loader: () => fetch(`http://localhost:5000/cars`)
      },
      {
        path:'/login',
        element: <Login></Login>,
      },
      {
        path:'/register',
        element: <Register></Register>,
      }
    ]
  },
]);

export default Router