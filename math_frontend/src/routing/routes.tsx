import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage/HomePage";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {path: '/', element: <HomePage />},
    {path: '/login', element: <LogIn />},
    {path: '/register', element: <Register />}
])

export default router;