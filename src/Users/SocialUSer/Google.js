import React, { useContext } from 'react';
import { FcGoogle} from "react-icons/fc";

import { GoogleAuthProvider } from "firebase/auth";
import { userContext } from '../../AuthContext/AuthContext';
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';




const Google = () => {
    const {loginwithgoogle}=useContext(userContext)
   

    const provider = new GoogleAuthProvider();
    const navigate=useNavigate()
    
    const handlelogin=()=>{
        loginwithgoogle(provider)
        .then((result)=>{
              const user=result.user 
              saveduser(user.displayName,user.email,user.photoURL)

              

        }).catch((err)=>{
            console.log(err)
        })
    }




    ///save user info monog

  
    const saveduser=(name,email,photo)=>{
        const userdettailse={
            name:name,
            email:email,
            photoURL:photo
        }
      
        
        fetch(`http://localhost:5000/userabout/${email}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userdettailse)
        })
          .then(res => res.json())
          .then(data => {
            if (data.acknowledged) {
              toast.success("user  registered successfully", 90000);
              navigate("/home");
            }
          });


         }
        
        
        
        
        
        

    
    return (
    <div className='flex justify-center'>
           <button onClick={handlelogin} className="btn btn-wide  flex justify-center items-center"><span className='mr-4 text-2xl'> <FcGoogle></FcGoogle></span>  Google</button>
       
    </div>
     
    )
    }

export default Google;