import { useQuery } from '@tanstack/react-query'
import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
import { RiShareForward2Fill } from 'react-icons/ri'
import { postcomnet, postcomnetapis } from '../../Api/CommnetApi/commentapi'
import Likeapi from '../../Api/Likeapi'
import { userContext } from '../../AuthContext/AuthContext'
import ComentCart from '../../Shared/COmentCart/ComentCart'
import CommentPostCart from '../../Shared/CommentPostCart/CommentPostCart'


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
  
      postcomnetapis(comments)
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
            
            <BiComment></BiComment>
          </span>
          Comment
        </button>
        <button className=" flex justify-center bg-gray-300 boder-none hover:bg-white  items-center  boder-nonetext-black outline-none hover:outline-none w-2/6  ">
          <span className="text-xl mr-1">
         
            <RiShareForward2Fill></RiShareForward2Fill>
          </span>
          Dettails
        </button>
      </div>
      



      <CommentPostCart handlecoment={handlecoment}></CommentPostCart>


      <div>
        {[...getcomments].reverse().map((scomment) => (
          <ComentCart scomment={scomment} key={scomment._id}></ComentCart>
        ))}
      </div>
    </div>
  )
}

export default SingelPost
