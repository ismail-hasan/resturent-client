import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomeLayout from "../Pages/HomePage/HomeLayout";
import MenuPage from "../Pages/MenuPages.jsx/MenuPage";
import Order from "../Pages/Order/Order";

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
            }
        ]
    }

])


export default router