import React from 'react';
import { AiOutlineLike } from "react-icons/ai";



const SingelPost = ({spost}) => {
    console.log(spost)
    const {_id
,        postUserName
,        postUser
,        postLocation,PostUserpik,media,postTime,postTitle


    }=spost
    return (
        <div className=" p-7 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700  mb-16">

 <div>
    <div className='my-2'>

    <div className="flex items-center space-x-4">
    <img className="w-10 h-10 rounded-full" src={PostUserpik} alt="" />
    <div className="font-medium text-left dark:text-white">
        <div>{postUserName}</div>
        <div className="text-sm text-left text-gray-500 dark:text-gray-400">{postTime
}</div>
    </div>
</div>
    </div>
    <h5 className="mb-2 text-xl text-left tracking-tight text-gray-900 dark:text-white">{postTitle}</h5>
 </div>     
        {media? <img className="w-full object-cover" src={media} alt=" " />:
        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />}



<div className="inline-flex  w-full  rounded-md shadow-sm" role="group">
  
  <button type="button" className="py-2 w-2/6 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white text-center">
  <span className='text-2xl w-3 text-center block'><AiOutlineLike></AiOutlineLike></span>
  </button>
  <button type="button" className="py-2 w-2/6 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-2  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Comment
  </button>


  <button type="button" className="py-2 w-2/6 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Dettails
  </button>
</div>
    



    </div>
    );
};

export default SingelPost;


//className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"


