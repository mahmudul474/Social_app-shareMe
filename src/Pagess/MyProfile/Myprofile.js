import React, { useContext, useEffect, useState } from "react";
import About from "../About/About";
import Header from "../../Shared/Header/Header";
import { userContext } from "../../AuthContext/AuthContext";
import Post from "../../components/GetAllPost/Post/Post";
import SingelPost from "../../components/GetAllPost/SingelPost";
import { useQuery } from "@tanstack/react-query";
import { FiEdit } from "react-icons/fi";
import Mymedia from "./Mymedia/Mymedia";
import { Outlet } from "react-router-dom";

const Myprofile = () => {
  const { user } = useContext(userContext);
  const [media, setmedia] = useState([]);



  const {
    data: myposts = [],
    isLoading,
    refetch
  } = useQuery({
    queryKey: ["myposts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/posts?email=${user?.email}`
      );
      const data = await res.json();
      setmedia(data);
      return data;
    }
  });

  if (isLoading) {
    return <div> lodding......</div>;
  }

  return (
    <div>
      <Header></Header>

      <div className="p-8 px-16 bg-white shadow mt-24  ">
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
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
          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Connect
            </button>
            <label
              htmlFor="edtiabout-modal"
              className="p-3  flex btn items-center   text-white w-28  "
            >
              <span>
                <FiEdit></FiEdit>
              </span>
              Edit about
            </label>
          </div>
        </div>
        <div className="mt-20 text-center border-b pb-12">
          <h1 className="text-4xl font-medium text-gray-700">
            {user?.displayName}
          </h1>
        </div>

        <div className="grid lg:grid-cols-4  ">
          <div className="col-span-1 lg:sticky top-12">
            {" "}
            <About></About>
          </div>
          <div className="col-span-2">
            <Outlet></Outlet>
            <div>
              <Post refetch={refetch}></Post>
            </div>

            {[...myposts].reverse().map((post) => (
              <SingelPost
                spost={post}
                setmedia={setmedia}
                key={post._id}
              ></SingelPost>
            ))}
          </div>

          <div className="col-span-1 ">
            <h3 className="text-bold text-xl capitalize p-4">My Media</h3>

            <div className=" grid  lg:grid-cols-2 gap-2">
              {[...media].reverse().map((media) => (
                <Mymedia media={media} key={media._id}></Mymedia>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
