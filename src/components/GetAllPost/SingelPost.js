import { useQuery } from '@tanstack/react-query'
import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
import { RiShareForward2Fill } from 'react-icons/ri'
import Likeapi from '../../Api/Likeapi'
import { userContext } from '../../AuthContext/AuthContext'
import Comment from './Comment'

const SingelPost = ({ spost }) => {
  const {
    _id,
    postUserName,
    postUser,
    PostUserpik,
    media,
    postTime,
    postTitle,
  } = spost

  const { user } = useContext(userContext)
  const [commentlength, setCommentslegth] = useState(0)
  const [likes, setLikes] = useState([])
  
 
  const handlecoment = (event) => {
    event.preventDefault()
    const from = event.target
    const comment = from.comment.value
    const commentTime = moment().calendar()

    const comments = {
      comentuser: user?.photoURL,
      comentusername: user?.displayName,
      comment: comment,
      postid: _id,
      commentTime: commentTime,
    }
   
//post comment database


    fetch('https://social-server-sooty.vercel.app/coment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comments),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch()
        from.reset()
        
      })
      .catch((err) => {
        console.log(err)
      })
  }


// get all comments fromsever

  const { data: getcomments, isLoading, refetch } = useQuery({
    queryKey: ['getcomments', _id],
    queryFn: async () => {
      const res = await fetch(`https://social-server-sooty.vercel.app/comments/${_id}`)
      const data = await res.json()
      setCommentslegth(data)
      return data
    },
  })





  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="my-7 bg-slate-200 py-4 shadow-2xl">
      <div className="card w-full  ">
        <div className="card-title ml-3">
          <div>
            <div className="flex items-center space-x-4">
              <img
                className="w-14 h-14 rounded-full"
                src={PostUserpik}
                alt=""
              />
              <div className="font-medium text-left dark:text-white">
                <div>{postUserName}</div>
                <div className="text-sm text-left text-gray-500 dark:text-gray-400">
                  {postTime}
                </div>
              </div>
            </div>
            <h5 className="mb-2 capitalize text-xl text-left tracking-tight text-gray-900 dark:text-white">
              {postTitle}
            </h5>
          </div>
        </div>

        {media && <img src={media} alt="Shoes" />}
      </div>

      <div className='flex justify-between mx-3'>

        <p>{likes.length ===0 ?  "" : <span className='capitalize'>{likes.length} Pepole likes </span>}</p>
       <p> {commentlength.length ===0 ? "":<span className='capitalize '>Commnets  {commentlength.length}</span>}</p>
       
      </div>

      <div className="btn-group w-full px-2 outline-none border-none ">
       <Likeapi postId={_id} 
       setLikes={setLikes}
       ></Likeapi>
        <button
          required
          className="flex justify-center items-center  bg-gray-300 boder-none hover:bg-white boder-none  text-black outline-none hover:outline-none w-2/6 "
        >
          <span className="text-xl mr-1">
            {' '}
            <BiComment></BiComment>
          </span>{' '}
          Comment
        </button>
        <button className=" flex justify-center bg-gray-300 boder-none hover:bg-white  items-center  boder-nonetext-black outline-none hover:outline-none w-2/6  ">
          <span className="text-xl mr-1">
         
            <RiShareForward2Fill></RiShareForward2Fill>
          </span>{' '}
          Dettails
        </button>
      </div>

      <form onSubmit={handlecoment}>
        <div className="flex items-center     ml-2 my-5">
          {user?.photoURL && (
            <img
              className="w-14 h-14 rounded-full mr-1"
              src={user?.photoURL}
              alt=""
            />
          )}

      
    <div className="flex items-center w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 mr-2">
       
        
        <textarea  name='comment' id="chat" required rows={1} className="block mx-4 p-2.5 w-full  text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type Your Comment..." />
            <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
            <svg aria-hidden="true" className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
            
        </button>
    </div>

        </div>
      </form>

      <div>
        {[...getcomments].reverse().map((scomment) => (
          <Comment scomment={scomment} key={scomment._id}></Comment>
        ))}
      </div>
    </div>
  )
}

export default SingelPost
