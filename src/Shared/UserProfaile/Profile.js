import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../../components/GetAllPost/Post/Post";
import SingelPost from "../../components/GetAllPost/SingelPost";
import Rightside from "../../components/righttSideComponent/Rightside";
import SmallSpinner from "../../components/Spinner/SmallSpinner";
import About from "../../Pagess/About/About";
import Mymedia from "../../Pagess/MyProfile/Mymedia/Mymedia";
import Header from "../Header/Header";
import UserAbout from "./UserAbout";

const Profile = () => {
  const profile = useLoaderData();
  console.log(profile);

  const { photoURL, email, name, profileEmail } = profile;
  const [media, setmedia] = useState([]);

  const {
    data: userpost = [],
    isLoading,
    refetch
  } = useQuery({
    queryKey: ["userpost", email],
    queryFn: async () => {
      const res = await fetch(
        `https://social-server-sooty.vercel.app/posts?email=${email}`
      );
      const data = await res.json();
      setmedia(data);
      return data;
    }
  });

  if (isLoading) {
    return <SmallSpinner></SmallSpinner>
  }

  return (
    <div>
      <Header></Header>
      <div className="mt-24 px-10">
        <div className="p-8 bg-white shadow  px-16 ">
          <div className="grid grid-cols-1 lg:grid-cols-3 ">
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0"></div>
            <div className="relative">
              <div className="w-48 overflow-hidden h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <img
                  src={photoURL}
                  alt=""
                  className="rounded-full object-cover "
                />
              </div>
            </div>
            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Connect
              </button>
              <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Message
              </button>
            </div>
          </div>
          <div className=" text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">{name}</h1>
          </div>

          <div className="grid lg:grid-cols-4 ">
            <div className="col-span-1">
              <div className=" grid  lg:grid-cols-2 gap-2 mt-6">
                {[...media].reverse().map((media) => (
                  <Mymedia media={media} key={media._id}></Mymedia>
                ))}
              </div>

              <UserAbout profile={profile}></UserAbout>
            </div>
            <div className="col-span-2">
              <div>
                {[...userpost].reverse().map((post) => (
                  <SingelPost spost={post} key={post._id}></SingelPost>
                ))}
              </div>
            </div>

            <div className="col-span-1">
              <Rightside></Rightside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
