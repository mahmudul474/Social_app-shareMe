import React from 'react';
import { Outlet } from 'react-router-dom';
import Leftsitenav from "../../components/Leftsitenav/Leftsitenav";
import Rightside from "../../components/righttSideComponent/Rightside";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Middle from "../Middle/Middle";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>

      <div className=" grid grid-cols-1 lg:grid-cols-12 md:grid-cols-8 border">
        {/* left side  */}
        <div className="hidden md:block lg:block lg:col-span-3 border md:col-span-2">
          <Leftsitenav></Leftsitenav>
        </div>

        {/* middel side */}
        <div className="col-span-12  lg:col-span-5 border md:col-span-4">
          <Outlet></Outlet>
          <Middle></Middle>
        </div>

        {/* right side */}
        <div className="hidden lg:block sticky inset-x-0 top-0  lg:col-span-2">
          <Rightside></Rightside>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;