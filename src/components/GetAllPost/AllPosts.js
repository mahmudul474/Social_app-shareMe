import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Post from './Post/Post';
import SingelPost from './SingelPost';

const AllPosts = () => {

// const {data:allPosts,isLoading,refetch}=useQuery({
//     queryKey:["allPosts"],
//     queryFn:async()=>{
//         const res=await fetch("http://localhost:5000/allposts")
//         const data= await res.json();
//         refetch()
//         return data;
//     }
// })

// if(isLoading){
//     return <div>Loading...</div>
    
// }


const [allPosts,setPost]=useState([])

useEffect(()=>{
   fetch("http://localhost:5000/allposts")
   .then(res=>res.json())
   .then(data=>{
      setPost(data)
   })


},[allPosts])



    return (
        <div>
            
            <div><Post  ></Post></div>
          
        <div>
        {
            [...allPosts].reverse().map(spost=><SingelPost key={spost._id} spost={spost}></SingelPost>)
            }
        </div>


        </div>
    );
};

export default AllPosts;