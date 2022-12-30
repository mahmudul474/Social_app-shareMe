import { createBrowserRouter } from "react-router-dom";
import About from "../Pagess/About/About";

import Home from "../Pagess/HomPage/Home";
import Myprofile from "../Pagess/MyProfile/Myprofile";
 
import Profile from "../Shared/UserProfaile/Profile";
import Login from "../Users/Login/Login";
import Register from '../Users/Regiseter/Register';
import Private from "./PrivateRoute/Private";

const router=createBrowserRouter([
{
    path:"/",
    element:<Login></Login>
},
{
    path:"/login",
    element:<Login></Login>, 
},
{
    path:"/register",
    element:<Register></Register>,
},

{
    path:"/home",
    element:<Private><Home></Home></Private>
},
{ 
    path:"/profaile/:id",
    loader:async({params})=>fetch(`https://social-server-sooty.vercel.app/users/${params.id}`),
    element:<Profile></Profile>
},
{
   path:"/about",
   element:<Private><About></About>   </Private>   
},
{
    path:"/myprofile",
    element:<Myprofile></Myprofile>

}

])




export default router