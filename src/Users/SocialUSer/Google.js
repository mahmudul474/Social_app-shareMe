import React, { useContext } from 'react';
import { FcGoogle} from "react-icons/fc";

import { GoogleAuthProvider } from "firebase/auth";
import { userContext } from '../../AuthContext/AuthContext';
import {  useNavigate } from 'react-router-dom';




const Google = () => {
    const {loginwithgoogle}=useContext(userContext)
   

    const provider = new GoogleAuthProvider();
    const navigate=useNavigate()
    
    const handlelogin=()=>{
        loginwithgoogle(provider)
        .then((result)=>{
              const user=result.user 
              console.log(user)
              navigate("/home")
              

        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
    <div>
           <button onClick={handlelogin} className="btn btn-wide"><span className='mr-4 text-2xl'> <FcGoogle></FcGoogle></span>  Google</button>
       
    </div>
     
    )
    }

export default Google;