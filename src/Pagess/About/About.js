import { useQuery } from '@tanstack/react-query'
import React, { useContext, useState } from 'react'
import { userContext } from '../../AuthContext/AuthContext'
import EditAbout from './Editabout/EditAbout'

import { FiEdit } from "react-icons/fi";
import {ImLocation2 } from "react-icons/im";
import {MdCastForEducation ,MdTitle,MdEmail} from "react-icons/md";
import {CgWorkAlt} from "react-icons/cg";
import {BsFillTelephoneForwardFill} from "react-icons/bs";
 




const About = () => {
const {user}=useContext(userContext)
const [editabout,setEditabout]=useState()
const {photoURL,displayName}=user

 

const { data:aboutUserdetails,isLoading,refetch} = useQuery({
  queryKey: ['aboutUserdetailsdetails',],
  queryFn:async () =>{
        const res=await  fetch(`https://social-server-sooty.vercel.app/userabout?email=${user?.email}`)
        const data = await res.json();
       
        return data
  }
   
})

console.log(aboutUserdetails)










if(isLoading){
  return <div>Loading...</div>

}


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
           
          </div>
          <div className="relative">
            
            <div className="w-48 h-48 overflow-hidden bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <img className='w-full h-full' src={photoURL} alt="" />
            </div>
          </div>
          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
            Message
            </button>
           
            <div>
            <label

            onClick={()=>setEditabout(user)}
            htmlFor="edtiabout-modal"  className="btn"><span><FiEdit></FiEdit></span>Edit about</label>
           
            </div>
          </div>
        </div>
        <div className="mt-20 text-center border-b pb-12">
          
          <h1 className="text-4xl font-medium text-gray-700">
            { aboutUserdetails?.name? aboutUserdetails?.name  : displayName} 
          </h1>
          <h1  className=" flex justify-center items-center text-xl font-medium text-gray-700">
            <span className=' text-xl mr-1'><MdTitle></MdTitle></span> 
            {aboutUserdetails?.title?  aboutUserdetails?.title:"set title on edit about"}
          </h1>
          
          <p className="mt-8  flex justify-center items-center text-gray-500"> <span className='text-xl mr-1'><CgWorkAlt></CgWorkAlt></span>
            {aboutUserdetails?.locationfrom ? aboutUserdetails?.locationfrom :"write job title on edit about"}
          </p>
          <p className="mt-2 flex justify-center items-center text-gray-500"><span className='text-xl mr-1'><MdCastForEducation></MdCastForEducation></span>{aboutUserdetails?.eduction? aboutUserdetails?.eduction:"write education edit about"}</p>

          <p className="font-light flex justify-center items-center  text-gray-600 mt-3"><span className=' text-xl mr-1'><ImLocation2></ImLocation2></span>{aboutUserdetails?.curentcity?  aboutUserdetails?.curentcity:"write localtion on edit about"}</p>


          
        <div className='flex justify-center items-center'><p className="font-light flex justify-center items-center  mr-2 text-gray-600 mt-3"><span className=' text-xl mr-1'><BsFillTelephoneForwardFill></BsFillTelephoneForwardFill></span>{aboutUserdetails.phone? aboutUserdetails.phone:"set phone number on edti about"}</p>
          <p className="font-light flex justify-center items-center  text-gray-600 mt-3"><span className=' text-xl mr-1'><MdEmail></MdEmail></span>{aboutUserdetails?.profileEmail? aboutUserdetails?.profileEmail:"set youre email on edit about"}</p></div>

          
        </div>



        <div className="mt-12 flex flex-col justify-center">
          
          <p className="text-gray-600 text-center font-light lg:px-16">
         {aboutUserdetails?.about? aboutUserdetails?.about:"write about on edit about"}
          </p>
        
        </div>
      </div>


      <EditAbout   
      refetch={refetch}
      aboutUserdetails={aboutUserdetails}
        user={user}
        editabout={editabout}
        
        ></EditAbout>




    </div> 

    

    
  )
}

export default About
