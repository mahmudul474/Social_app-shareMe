import React from 'react'
import { FiEdit } from "react-icons/fi";


const UserAbout = ({ user }) => {
  const {
    name,
    email,
    location,
    age,
    jobtitile,
    education,
    about,
    cover,
    profile,

    photoURL
  } = user
  console.log(user)

  return (
    <div className="p-16">
      <div className="p-8 bg-white shadow mt-24">
        
        <div className="grid grid-cols-1 md:grid-cols-3">
          
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            
            <div>
              
              <p className="font-bold text-gray-700 text-xl">22</p>
              <p className="text-gray-400">Friends</p>
            </div>
            <div>
              
              <p className="font-bold text-gray-700 text-xl">10</p>
              <p className="text-gray-400">Photos</p>
            </div>
            <div>
              
              <p className="font-bold text-gray-700 text-xl">89</p>
              <p className="text-gray-400">Comments</p>
            </div>
          </div>
          <div className="relative">
            
            <div className="w-48 h-48 overflow-hidden bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <img src={photoURL} alt="" />
            </div>
          </div>
          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              
              Connect
            </button>
            <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              
              Message
            </button>
            <div>
            <button className="btn "><span><FiEdit></FiEdit></span>Edit about</button>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center border-b pb-12">
          
          <h1 className="text-4xl font-medium text-gray-700">
            {name} 
          </h1>
          <p className="font-light text-gray-600 mt-3">{location? location:"write localtion on edit about"}</p>
          <p className="mt-8 text-gray-500">
            {jobtitile? jobtitile:"write job title on edit about"}
          </p>
          <p className="mt-2 text-gray-500">{education? education:"write education edit about"}</p>
        </div>
        <div className="mt-12 flex flex-col justify-center">
          
          <p className="text-gray-600 text-center font-light lg:px-16">
         {about? about:"write about on edit about"}
          </p>
          <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
            
            Show more
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserAbout
