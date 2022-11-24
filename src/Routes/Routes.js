import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Categories from "../Page/Categories/Categories";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/home',
                element: <PrivateRoutes><Home></Home></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    }
]);

export default router;