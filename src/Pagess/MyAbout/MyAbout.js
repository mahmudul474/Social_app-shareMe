import React from "react";
import Header from "../../Shared/Header/Header";
import About from "../About/About";
import { useContext } from "react";
import { userContext } from "../../AuthContext/AuthContext";

export default function MyAbout() {
  const { user } = useContext(userContext);

  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-28 ">
        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0"></div>
        <div className="relative">
          <div className="w-48 overflow-hidden h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
            <img
              src={user?.photoURL}
              alt=""
              className="rounded-full object-cover "
            />
          </div>
        </div>
      </div>
      <div className=" text-center border-b pb-12 ">
        <h1 className="text-4xl font-medium text-gray-700 mt-[20px] lg:mt-[100px]">
          {user?.displayName}
        </h1>
      </div>
      <About></About>
    </div>
  );
}
