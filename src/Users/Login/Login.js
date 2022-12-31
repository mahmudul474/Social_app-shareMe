import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { userContext } from '../../AuthContext/AuthContext';
import Google from '../SocialUSer/Google';



const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {login,}=useContext(userContext)
    const [erro,setEro]=useState("")
    const navigate=useNavigate()

const handellogin=data=>{
    console.log(data)
        login(data.email, data.password)
        .then((result)=>{
            setEro("")
            const user=result.user;
            console.log(user)
            navigate("/home")
           
                    
        }).catch(ero=>{
           const message=ero.message;
           setEro(message)
        })
}



    return (
       
<div className="min-h-screen flex flex-col bg-slate-500">
            <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <div className='bg-white bg-base-300    rounded-lg  sm:w-full lg:w-[500px] p-6'>
              <form   onSubmit={ handleSubmit(handellogin)} className="px-6  rounded  text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">login</h1>

               <p className='text-red-600'>{erro}</p>


                    <input type="text"
                    {...register("email", { required: true })}
                    
                    className="block border border-grey-light w-full p-3 rounded mt-4 " name="email" placeholder="Email" />
                  <p className='text-left mb-3' >  {errors?.email && <span className=' text-red-600 text-left capitalize '>email is required</span>}</p>

                    <input type="password" className="  mt-5 block border border-grey-light w-full p-3 rounded " name="password" placeholder="Password"
                    
                    {...register("password", { required: true })}
                    />
                      <p className='text-left capitalize text-lg text-red-600 ' >
                      {errors?.password && <span className='  '>password is required</span>}
                      </p>
                 
                     <p className='text-left my-4'>forget password ??????</p>

                    <button type="submit" className="btn-wide btn text-xl capitalize text-center  rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1 block m-auto">login</button>
                    
                    <div className='text-left my-3'>
                        <p>New in shareMe Please <Link className=' underline underline-offset-1 text-green-500 text-xl ml-2' to="/register">Register </Link></p>
                    </div>

                    <div className="divider">OR continue</div>
           

                 </form>
                 <Google></Google>
              </div>

                
            </div>
        </div>
    );
};

export default Login;