import React from 'react';
import { Link } from 'react-router-dom';

const Comment = ({scomment}) => {

    const{comentuser,comentusername,like,  comment, commentTime}=scomment

    return (
        <div className="flex items-center    dark:bg-gray-800">

        <div className="  dark:bg-gray-800 text-black dark:text-gray-200 p-4 antialiased flex max-w-lg">
          <img className="rounded-full h-8 w-8 mr-2 mt-1 " src={comentuser} alt=""/>
          <div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl px-4 pt-2 pb-2.5">
              <div className="font-semibold text-sm leading-relaxed">{comentusername}</div>
              <div className="text-normal leading-snug md:leading-normal capitalize">{comment}</div>

              <div className='flex'>
                <Link className='mr-2 underline'>Like</Link>
                <Link className='mr-2 underline'>Riply</Link>
                <p className='ml-2'>{commentTime}</p>
             </div>

            </div>
             
        </div>
        </div></div>
    );
};

export default Comment;