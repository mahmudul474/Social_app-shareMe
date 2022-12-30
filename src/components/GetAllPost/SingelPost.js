import React, { useContext, useState } from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { RiShareForward2Fill} from "react-icons/ri";
import { userContext } from '../../AuthContext/AuthContext';





const SingelPost = ({spost}) => {
    const {_id
,        postUserName
,        postUser
      ,PostUserpik,media,postTime,postTitle


    }=spost
    const {user}=useContext(userContext)
    
    const [count,setcount]=useState(0)




const handlecoment=(event)=>{

event.preventDefault()
const from=event.target;
const comment=from.coment.value;


const comments={
  comentuser:user?.photoURL,
  comentusername:user?.displayName,
  comment:comment,
  like:count,
  postid:_id

}


fetch("http://localhost:5000/coment",{
  method: "POST",
  headers:{
    "Content-Type":"application/json",
  },
  body:JSON.stringify(comments)
})
.then(res=>res.json())
 .then(data=>{
    console.log(data)}).catch(err=>{console.log(err)})





}







    return (
      
<div className='my-7 bg-slate-200 py-4 shadow-2xl'>


<div className="card w-full  ">
  <div className='card-title ml-3' >
<div >

    <div className="flex items-center space-x-4">
    <img className="w-14 h-14 rounded-full" src={PostUserpik} alt="" />
    <div className="font-medium text-left dark:text-white">
        <div>{postUserName}</div>
        <div className="text-sm text-left text-gray-500 dark:text-gray-400">{postTime
}</div>
    </div>
</div>
<h5 className="mb-2 capitalize text-xl text-left tracking-tight text-gray-900 dark:text-white">{postTitle}</h5>


    </div>
    
 </div> 
  
  
  {
    media && <img src={media} alt="Shoes" />
  }
</div>
 



 <div className="btn-group w-full mt-4">

  <button
onClick={() => setcount(count + 1)}
onDoubleClick={() => setcount(count
-1)} 
  
   className="btn bg-white boder-none hover:bg-white text-black outline-none hover:outline-none w-2/6 "><span className='text-xl mr-1'> <AiOutlineLike></AiOutlineLike></span> Like</button>
  <button required className="btn bg-white boder-none hover:bg-white text-black outline-none hover:outline-none w-2/6 "><span className='text-xl mr-1'> <BiComment></BiComment></span> Comment</button>
  <button className="btn bg-white boder-none hover:bg-white text-black outline-none hover:outline-none w-2/6 "><span className='text-xl mr-1'> < RiShareForward2Fill></ RiShareForward2Fill></span> Dettails</button>


</div>


<form  onSubmit={handlecoment} >

<div className="flex items-center justify-center space-x-4 my-5">
  {
    user?.photoURL &&   <img className="w-14 h-14 rounded-full mr-1" src={  user?.photoURL} alt="" />
  }
    <div className="flex justify-center">
  <div className="mb-3 ">
 <input type="text" name="coment" placeholder='write youre comment' required className='sm:w-40 lg:w-52 p-3 '/>
 <button className="btn btn-circle btn-outline mx-4 " type='submit'>Post</button>
 
  </div>
</div>
</div>
</form>



 </div>






    );
};

export default SingelPost;





