import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

const handellogin=data=>{
    console.log(data)
}



    return (
       
<div className="bg-slate-600 min-h-screen flex flex-col bg-base-300">
            <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <form   onSubmit={ handleSubmit(handellogin)} className="bg-gray-300 px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">login</h1>

               <p className='text-red-600'>{}</p>


                    <input type="text"
                    {...register("email", { required: true })}
                    
                    className="block border border-grey-light w-full p-3 rounded mt-4 " name="email" placeholder="Email" />
                  <p className='text-left mb-3' >  {errors?.email && <span className=' text-red-600 text-left capitalize font-bold'>email is required</span>}</p>

                    <input type="password" className="  mt-5 block border border-grey-light w-full p-3 rounded " name="password" placeholder="Password"
                    
                    {...register("password", { required: true })}
                    />
                      <p className='text-left ' >
                      {errors?.password && <span className=' capitalize font-bold text-lg text-red-600'>password is required</span>}
                      </p>
                 
                     <p className='text-left my-4'>forget password ??????</p>

                    <button type="submit" className="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1">login</button>
                    
                    <div className='text-left my-3'>
                        <p>New in shareMe Please <Link className=' underline underline-offset-1 text-green-500 text-xl ml-2' to="/register">Register</Link></p>
                    </div>
                 </form>

                
            </div>
        </div>
    );
};

export default Login;