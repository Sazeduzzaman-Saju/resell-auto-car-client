import { createBrowserRouter } from "react-router-dom";
import CarCategoryLayout from "../layout/CarCategoryLayout/CarCategoryLayout";
import DashBoardLayout from "../layout/DashBoardLayout";
import Main from "../layout/Main";
import Blog from "../Page/Blog/Blog";
import AddToCart from "../Page/Categories/AddToCart/AddToCart";
import CarDetails from "../Page/Categories/CarDetails/CarDetails";
import SideHome from "../Page/Categories/SideHome/SideHome";
import DashBoard from "../Page/DashBoard/DashBoard";
import User from "../Page/DashBoard/User/User";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import CategoryData from "../Page/Home/CategoryData/CategoryData";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";

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
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/carsCategories/carDetails/:id',
                element: <CarDetails></CarDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/cars/${params.id}`)
            },
            {
                path: '/carsCategories/add-to-cart/:id',
                element: <AddToCart></AddToCart>,
                loader: ({ params }) => fetch(`http://localhost:5000/cars/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            },
            {
                path: '/dashboard/allUsers',
                element: <User></User>
            }
        ]
    }
]);

export default router;