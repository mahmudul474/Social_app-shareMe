import { useQuery } from '@tanstack/react-query';
import React from 'react';
import User from './User';

const Rightside = () => {
    const {data:allusers=[]}=useQuery({
        queryKey:["allusers"],
        queryFn:async () => {
            const res=await fetch("https://social-server-sooty.vercel.app/users")
             const data=await res.json()
             return data;

        }
    })

console.log(allusers)

   

    return (
        <div>
            <h3 className='text-left p-6  text-xl capitalize font-bold'>Friends</h3>
            <div>
                {
                    allusers?.map(user=><User key={user._id} user={user}></User>)
                }

            </div>
        </div>
    );
};

export default Rightside;