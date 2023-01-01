import React from 'react';
import {BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


const User = ({user}) => {
    const {name,_id,photoURL}=user
    return (
        <div className=''>
           
                <div className='flex  justify-between  items-center  '>
                <div className='flex px-6 py-2 items-center '>
                {photoURL && <img src={photoURL} className="w-12 h-12 rounded-full object-cover " alt="user" />}
                <span className='text-xs capitalize ml-2 font-bold'>{name}</span>
                </div>


                 <Link to={`/profaile/${_id}`} >
                 <button className='text-xl'><BsArrowRightCircleFill></BsArrowRightCircleFill></button></Link>

                </div>
           
        </div>
    );
};

export default User;