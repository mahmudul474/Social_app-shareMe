import { createBrowserRouter } from "react-router-dom";
import CoomingSoon from "../components/CoomingSoon/CoomingSoon";
import Erooor from "../components/ErrorPage/Erooor";
import About from "../Pagess/About/About";
import AllMedia from "../Pagess/ALLMedia/AllMedia";
import Home from "../Pagess/HomPage/Home";
import Myprofile from "../Pagess/MyProfile/Myprofile";
import Profile from "../Shared/UserProfaile/Profile";
import Login from "../Users/Login/Login";
import Register from "../Users/Regiseter/Register";
import Private from "./PrivateRoute/Private";
import MyAbout from "../Pagess/MyAbout/MyAbout";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Erooor></Erooor>
  },
  {
    path: "/",
    element: <Login></Login>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  },

  {
    path: "/home",
    element: (
      <Private>
        <Home></Home>
      </Private>
    )
  },
  {
    path: "/profaile/:id",
    loader: async ({ params }) =>
      fetch(`http://localhost:5000/users/${params.id}`),
    element: <Profile></Profile>
  },
  {
    path: "/about",
    element: (
      <Private>
        <MyAbout></MyAbout>
      </Private>
    )
  },
  {
    path: "/myprofile",
    element: (
      <Private>
        <Myprofile></Myprofile>
      </Private>
    )
  },

  {
    path: "/media",
    element: (
      <Private>
        <AllMedia></AllMedia>
      </Private>
    )
  },
  {
    path: "/mesege",
    element: <CoomingSoon></CoomingSoon>
  }
]);

export default router;
