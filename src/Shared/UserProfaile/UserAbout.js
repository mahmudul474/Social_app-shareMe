import React from 'react';
import { BsCalendarDate, BsFillTelephoneForwardFill } from 'react-icons/bs';
import { ImLocation2 } from 'react-icons/im';
import { MdCastForEducation, MdEmail } from 'react-icons/md';

const UserAbout = ({profile}) => {
    return (
        <div className="  bg-white  ">
        
          
        <div className=" text-center border-b pb-12">
          
     
          

          <p className="mt-8  flex justify-center items-center text-gray-500"> <span className='text-xl mr-1'><BsCalendarDate></BsCalendarDate></span>jobtitle:
            {profile?.jobtitle}
          </p>
          <p className="mt-8  flex justify-center items-center text-gray-500"> <span className='text-xl mr-1'><BsCalendarDate></BsCalendarDate></span>DateOfBirth: 
            {profile?.DateOfBirth}
          </p>
          
          <p className="mt-2 flex justify-center items-center text-gray-500"><span className='text-xl mr-1'><MdCastForEducation></MdCastForEducation></span>Education: {profile?.eduction }</p>

          <p className="font-light flex justify-center items-center  text-gray-600 mt-3"><span className=' text-xl mr-1'><ImLocation2></ImLocation2></span>Location: {profile?.curentcity }</p>


          
        <div className=''><p className="font-light flex justify-center items-center  mr-2 text-gray-600 mt-3"><span className=' text-xl mr-1'><BsFillTelephoneForwardFill></BsFillTelephoneForwardFill></span>Phone: {profile?.phone}</p>
            <p className="font-light flex justify-center items-center  text-gray-600 mt-3"><span className=' text-xl mr-1'><MdEmail></MdEmail></span>Email: { profile?.profileEmail }</p>

             
            
          
          
          </div>
          
      
             
           
          
          

          
        </div>



        <div className="mt-12 flex   justify-center">
          
          <p className="text-gray-600 text-center font-light lg:px-16">
         {profile?.about}
          </p>
        
        </div>
      </div>
    );
};

export default UserAbout;