import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomeLayout from "../Pages/HomePage/HomeLayout";
import MenuPage from "../Pages/MenuPages.jsx/MenuPage";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Shared/Secret";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <HomeLayout></HomeLayout>,
            },
            {
                path: "/menu",
                element: <MenuPage></MenuPage>,
            },
            {
                path: "/oder/:category",
                element: <Order></Order>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/secret",
                element: <PrivetRoute><Secret></Secret></PrivetRoute>,
            }
        ]
    }

])


export default router