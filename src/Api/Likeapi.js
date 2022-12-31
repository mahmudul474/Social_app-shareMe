import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { userContext } from '../AuthContext/AuthContext';

const Likeapi = ({postId,setLikes}) => {
const{user}=useContext(userContext)


const  handleLike=()=>{
    savelike()
}
const savelike=()=>{
    const likes={
        like:user?.uid || user.email,
        likerusername:user.displayName,
        postid:postId,
        likeuserPhoto:user.photoURL
    }
fetch(`http://localhost:5000/likes`,{
    method:'POST',
    headers:{
        'Content-Type': 'application/json',
    },
    body:JSON.stringify(likes)
})
.then(res=>res.json())
.then(data=>{
    refetch()
    
})
}

const {data:likes=[],refetch}=useQuery({
    queryKey:["likes",postId],
    queryFn:async () => {
     const res=await fetch(`http://localhost:5000/likes/${postId}`)
    const data= await res.json()
    console.log(data.length)
    setLikes(data)
    return data
    },
    
  })






    return  <button
          onClick={handleLike}
    className="btn bg-white boder-none hover:bg-white text-black outline-none hover:outline-none w-2/6 "
  >
    <span className="text-xl mr-1">

      <AiOutlineLike></AiOutlineLike>
    </span>{' '}
    Like
  </button>
};

export default Likeapi;