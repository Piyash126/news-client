import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Category from "../pages/categories/Category";
import News from "../pages/news/News";
import Main from "../layout/Main";
import Register from "../pages/login/register/Register";
import LoginForm from "../pages/login/login/LoginForm";
import PrivateRoute from "./privateRoute/PrivateRoute";
import TermsAndConditions from "../pages/others/termsAndCondition/TermsAndConditions";
import Profile from "../pages/profile/Profile";

export const routes = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:5000/news')
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
      },
      {
        path: "/news/:id",
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
      },
      {
        path:'/login',
        element:<LoginForm></LoginForm>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/terms',
        element:<TermsAndConditions></TermsAndConditions>
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
    ],
  },
]);
