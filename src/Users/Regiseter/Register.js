import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegister=data=>{
        console.log(data)
    }




    return (
        <div className="bg-slate-600 min-h-screen flex flex-col bg-base-300">
        <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <form   onSubmit={ handleSubmit( handleRegister)} 
             className="bg-gray-300 px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">Register</h1>


                <input 
                
                {...register("name", { 
                    required: true,
                    minLength: { value: 4, message: "name must be 4 characters long" }
                })}
                type="text" className="block border border-grey-light w-full p-3 rounded mt-4" name="name" placeholder="Full Name" />

                  <p className='text-left text-red-600 capitalize'>{errors?.name && <span>{errors?.name?.message}</span>}</p>

                  <input type="email"placeholder='Email'
                  
                  {...register("email", {required:"email is required",})} 
                        className="block border border-grey-light w-full p-3 rounded mt-4" />

                        {errors.email && <p className='text-left text-red-600 capitalize mb-2'>{errors.email.message}</p>}


                <input type="password" className="block border border-grey-light w-full p-3 rounded my-6" name="password" placeholder="Password"
                
                {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be 6 characters long" },
                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                })}
                />
{errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                <button type="submit" className="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1">Create Account</button>

               

                <div className='text-left my-3'>
                        <p>Already have a acoutn <Link className=' underline underline-offset-1 text-green-500 text-xl ml-2' to="/login">Login</Link></p>
                    </div>



            </form>

            
        </div>
    </div>
    );
};

export default Register;