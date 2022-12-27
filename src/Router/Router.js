import { createBrowserRouter } from "react-router-dom";
import Main from "../Layot/Main";
import Home from "../Pagess/HomPage/Home";
import Login from "../Users/Login/Login";
import Register from '../Users/Regiseter/Register';

const router=createBrowserRouter([
{
    path:"/",
    element:<Login></Login>
},
{
    path:"/login",
    element:<Login></Login>
},
{
    path:"/register",
    element:<Register></Register>,
}

])




export default router