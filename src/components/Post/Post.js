import React, { useContext } from 'react'
import { userContext } from '../../AuthContext/AuthContext'
 
const Post = () => {
  const {user}=useContext(userContext)
  return (
    <div>
      <form className="bg-base-300 py-7 rounded-xl">
        <div className="parent flex flex-col justify-center items-center ">
          <div className="flex justify-center items-center">
            {
              user?.photoURL ?<img
              src={user?.photoURL}
              alt="userPhoto"
              className="w-14 h-14 mr-3 object-cover rounded-full"
            /> :<img
              src="https://ibb.co/k6wCNzp"
              alt="avatar"
              className="w-10 h-10 mr-3  rounded-full"
            />
            }
            <textarea
              className="border  lg:w-[500px] md:w-[400px] sm:w-[400px] border-black rounded-lg p-1"
              placeholder="what is youre mind??"
            />
          </div>

          <div className="flex items-center my-6 px-2 sm:flex-row">
            <h3 className="lg:mr-10 text-lg capitalize font-bold  ">Add youre Post</h3>

            <div className="flex items-center my-4">
              <label htmlFor="photo">
                <img
                  className="w-10 lg:w-20  mx-10  rounded-full"
                  src="https://i.ibb.co/yFtsPmy/pngtree-gallery-vector-icon-png-image-470660.jpg"
                  alt=""
                />
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                className="w-0  border-none"
              />
              <p>
                
                <input
                  type="text"
                  placeholder="location ????? "
                  className="border p-2  lg:w-[260px]"
                />
              </p>
            </div>
          </div>
        </div>


        <button className="btn no-animation px-14">Post </button>


      </form>
    </div>
  )
}

export default Post
