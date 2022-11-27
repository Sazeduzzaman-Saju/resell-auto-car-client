import { createBrowserRouter } from "react-router-dom";
import CarCategoryLayout from "../layout/CarCategoryLayout/CarCategoryLayout";
import DashBoardLayout from "../layout/DashBoardLayout";
import Main from "../layout/Main";
import Blog from "../Page/Blog/Blog";
import AddToCart from "../Page/Categories/AddToCart/AddToCart";
import CarDetails from "../Page/Categories/CarDetails/CarDetails";
import SideHome from "../Page/Categories/SideHome/SideHome";
import Buyer from "../Page/DashBoard/Buyer/Buyer";
import DashBoard from "../Page/DashBoard/DashBoard";
import ReportedPost from "../Page/DashBoard/ReportedPost/ReportedPost";
import Seller from "../Page/DashBoard/User/Seller";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import CategoryData from "../Page/Home/CategoryData/CategoryData";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import AdminRoutes from "./AdminRoutes/AdminRoutes";
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
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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
    },
    {
        path: '/carsCategories',
        element: <CarCategoryLayout></CarCategoryLayout>,
        children: [
            {
                path: '/carsCategories',
                element: <SideHome></SideHome>
            },
            {
                path: '/carsCategories/category/:id',
                element: <CategoryData></CategoryData>,
                loader: ({ params }) => fetch(`https://autocar-two.vercel.app/category/${params.id}`)
            },
            {
                path: '/carsCategories/carDetails/:id',
                element: <CarDetails></CarDetails>,
                loader: ({ params }) => fetch(`https://autocar-two.vercel.app/cars/${params.id}`)
            },
            {
                path: '/carsCategories/add-to-cart/:id',
                element: <PrivateRoutes><AddToCart></AddToCart></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://autocar-two.vercel.app/cars/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashBoardLayout></DashBoardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            },
            {
                path: '/dashboard/seller',
                element: <AdminRoutes><Seller></Seller></AdminRoutes>
            },
            {
                path: '/dashboard/buyer',
                element: <AdminRoutes><Buyer></Buyer></AdminRoutes>
            },
            {
                path: '/dashboard/reported-post',
                element: <AdminRoutes><ReportedPost></ReportedPost></AdminRoutes>
            }
        ]
    }
]);

export default router;