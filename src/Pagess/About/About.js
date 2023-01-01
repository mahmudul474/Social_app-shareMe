import { useQuery } from '@tanstack/react-query'
import React, { useContext, useState } from 'react'
import { userContext } from '../../AuthContext/AuthContext'
import EditAbout from './Editabout/EditAbout'

import { FiEdit } from "react-icons/fi";
import {ImLocation2 } from "react-icons/im";
import {MdCastForEducation ,MdTitle,MdEmail} from "react-icons/md";
import {CgWorkAlt} from "react-icons/cg";
import {BsCalendarDate, BsFillTelephoneForwardFill} from "react-icons/bs";
 




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

 

 <div className=" ">
      <div className="  bg-white  ">
        <label

            onClick={()=>setEditabout(user)}
          htmlFor="edtiabout-modal" className="p-3  flex btn items-center text-white  "><span><FiEdit></FiEdit></span>Edit about</label>
        
       
         
        <div className=" text-center border-b pb-12">
          
      
          <h1  className=" flex justify-center items-center text-xl font-medium text-gray-700">
            <span className=' text-xl mr-1'><MdTitle></MdTitle></span> 
            {aboutUserdetails?.title?  aboutUserdetails?.title:"set title on edit about"}
          </h1>
          <p className="mt-8  flex justify-center items-center text-gray-500"> <span className='text-xl mr-1'><BsCalendarDate></BsCalendarDate></span>
            {aboutUserdetails?.jobtitle? aboutUserdetails?.jobtitle:"write job type about"}
          </p>
          <p className="mt-8  flex justify-center items-center text-gray-500"> <span className='text-xl mr-1'><BsCalendarDate></BsCalendarDate></span>
            {aboutUserdetails?.DateOfBirth? aboutUserdetails?.DateOfBirth:"write DateOf Birth about"}
          </p>
          
          <p className="mt-2 flex justify-center items-center text-gray-500"><span className='text-xl mr-1'><MdCastForEducation></MdCastForEducation></span>{aboutUserdetails?.eduction? aboutUserdetails?.eduction:"write education edit about"}</p>

          <p className="font-light flex justify-center items-center  text-gray-600 mt-3"><span className=' text-xl mr-1'><ImLocation2></ImLocation2></span>{aboutUserdetails?.curentcity?  aboutUserdetails?.curentcity:"write localtion on edit about"}</p>


          
        <div className=''><p className="font-light flex justify-center items-center  mr-2 text-gray-600 mt-3"><span className=' text-xl mr-1'><BsFillTelephoneForwardFill></BsFillTelephoneForwardFill></span>{aboutUserdetails.phone? aboutUserdetails.phone:"set phone number on edti about"}</p>
            <p className="font-light flex justify-center items-center  text-gray-600 mt-3"><span className=' text-xl mr-1'><MdEmail></MdEmail></span>{aboutUserdetails?.profileEmail ? aboutUserdetails?.profileEmail : "set youre email on edit about"}</p></div>
          
        
             
        

          
        </div>



        <div className="mt-12 flex   justify-center">
          
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
