import { useQuery } from '@tanstack/react-query'
import React, { useContext, useState } from 'react'
import { userContext } from '../../AuthContext/AuthContext'
import EditAbout from './Editabout/EditAbout'
import { FiEdit } from "react-icons/fi";
import {ImLocation2 } from "react-icons/im";
import {MdCastForEducation ,MdEmail} from "react-icons/md";

import {BsCalendarDate, BsFillTelephoneForwardFill} from "react-icons/bs";
import SmallSpinner from '../../components/Spinner/SmallSpinner';
 



const About = () => {
const {user}=useContext(userContext)
const [editabout,setEditabout]=useState()


 

const { data:aboutUserdetails,isLoading,refetch} = useQuery({
  queryKey: ['aboutUserdetailsdetails',],
  queryFn:async () =>{
        const res=await  fetch(`https://social-server-sooty.vercel.app/user/about/${user?.email}`)
        const data = await res.json();
       
        return data
  }
   
})










if(isLoading){
  return <SmallSpinner></SmallSpinner>

}


  return (

 

 <div className=" ">
      <div className="  bg-white  ">
        
        <div className='hidden'>  <label
          

            onClick={()=>setEditabout(user)}
          htmlFor="edtiabout-modal" className="p-3  flex btn items-center   text-white w-28  "><span><FiEdit></FiEdit></span>Edit about</label></div>
       
         
        <div className=" text-center border-b pb-12">
          
     
          <h3 className='text-xl  font-bolod capitalize p-4'>About</h3>

          <p className="mt-8  flex justify-center items-center text-gray-500"> <span className='text-xl mr-1'><BsCalendarDate></BsCalendarDate></span>
            {aboutUserdetails?.jobtitle? aboutUserdetails?.jobtitle:"write job type on edit about"}
          </p>
          <p className="mt-2  flex justify-center items-center text-gray-500"> <span className='text-xl mr-1'><BsCalendarDate></BsCalendarDate></span>
            {aboutUserdetails?.DateOfBirth? aboutUserdetails?.DateOfBirth:"write DateOf Birth on edit about"}
          </p>
          
          <p className="mt-2 flex justify-center items-center text-gray-500"><span className='text-xl mr-1'><MdCastForEducation></MdCastForEducation></span>{aboutUserdetails?.eduction? aboutUserdetails?.eduction:"write education edit about"}</p>

          <p className="font-light flex justify-center items-center  text-gray-600 mt-3"><span className=' text-xl mr-1'><ImLocation2></ImLocation2></span>{aboutUserdetails?.curentcity?  aboutUserdetails?.curentcity:"write localtion on edit about"}</p>


          
        <div className=''><p className="font-light flex justify-center items-center  mr-2 text-gray-600 mt-3"><span className=' text-xl mr-1'><BsFillTelephoneForwardFill></BsFillTelephoneForwardFill></span>{aboutUserdetails?.phone? aboutUserdetails.phone:"set phone number on edti about"}</p>
            <p className="font-light flex justify-center items-center  text-gray-600 mt-3"><span className=' text-xl mr-1'><MdEmail></MdEmail></span>{aboutUserdetails?.profileEmail ? aboutUserdetails?.profileEmail : "set youre email on edit about"}</p>

             
            
          
          
          </div>
          
      
             
           
          
          

          
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
