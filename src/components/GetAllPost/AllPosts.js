 
import React, { useEffect, useState } from 'react';
import Post from './Post/Post';
import SingelPost from './SingelPost';

const AllPosts = () => {

const [allPosts,setPost]=useState([])

useEffect(()=>{
   fetch("https://social-server-sooty.vercel.app/allposts")
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