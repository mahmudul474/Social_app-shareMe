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


    fetch('http://localhost:5000/coment', {
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
      const res = await fetch(`http://localhost:5000/comments/${_id}`)
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

      <div className='flex justify-between mx-2'>

        <p>{likes.length ===0 ?  "" : <span className='capitalize font-bold '>{likes.length} Pepole likes </span>}</p>
       <p> {commentlength.length ===0 ? "":<span className='capitalize font-bold'>Commnets:{commentlength.length}</span>}</p>
       
      </div>

      <div className="btn-group w-full ">
       <Likeapi postId={_id} 
       setLikes={setLikes}
       ></Likeapi>
        <button
          required
          className="btn bg-white boder-none hover:bg-white text-black outline-none hover:outline-none w-2/6 "
        >
          <span className="text-xl mr-1">
            {' '}
            <BiComment></BiComment>
          </span>{' '}
          Comment
        </button>
        <button className="btn bg-white boder-none hover:bg-white text-black outline-none hover:outline-none w-2/6 ">
          <span className="text-xl mr-1">
            {' '}
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

          <div className="relative w-full">
            <input
              type="text"
              name="comment"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Type youre comments"
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 mr-1 p-2.5 text-sm font-medium text-white bg-slate-800 rounded-r-lg     "
            >
              
                 
              Post
           
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
