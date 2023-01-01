import React, { useContext } from 'react'
import About from '../About/About'
import Header from "../../Shared/Header/Header"
import { userContext } from '../../AuthContext/AuthContext'
import Post from "../../components/GetAllPost/Post/Post"
import SingelPost from "../../components/GetAllPost/SingelPost"
import MyPost from './MyPost/MyPost'


const Myprofile = () => {
  const { user } = useContext(userContext)
  const{photoURL,displayName}=user
    return (
      <div >
        <Header></Header>
        
      <div className="p-8 px-16 bg-white shadow mt-24  ">
       
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
          
          
          </div>
          <div className="relative">
         
            <div className="w-48 overflow-hidden h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
             <img src={photoURL} alt="" className='rounded-full object-cover ' />
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
        <div className="mt-20 text-center border-b pb-12">
          
          <h1 className="text-4xl font-medium text-gray-700">
            Jessica Jones, <span className="font-light text-gray-500">27</span>
          </h1>
         
         
        </div>
        
 <div className='grid lg:grid-cols-3 px-32 '>
          <div className='col-span-1'> <About></About></div>
            <div className='col-span-2'>
              <div><Post></Post></div>    
              <div>
               
                 <MyPost></MyPost>
              
              </div>   
 

          </div>
              </div>

        </div>
       

    </div>
    );
}

export default Myprofile

