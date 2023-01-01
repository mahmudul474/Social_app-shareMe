import React, { useContext, useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { userContext } from '../../AuthContext/AuthContext'
import { AiFillMessage } from 'react-icons/ai'

const Header = () => {
  const { user, logout } = useContext(userContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)



  const lgNav=<>
  <li>
              <Link
                to="/mesege"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide   transition-colors duration-200 hover:text-teal-accent-400"
              >
                <span className="">
                  <AiFillMessage></AiFillMessage>
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/media"
                aria-label="media"
                title="media"
                className="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
              >
                Media
              </Link>
            </li>



        




  
  
  </>


  const handlogout = () => {
    logout()
      .then(() => {})
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className=" text-black">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/home"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            
            <span className="ml-2 text-xl font-bold tracking-wide  uppercase">
              ShareME
            </span>
          </Link>
          <ul className=" items-center hidden space-x-8 lg:flex">

          {
            lgNav
          }            

            <div className="dropdown dropdown-end">
              <label tabIndex={0}>
                <div className="flex  ">
                  {user?.photoURL?
                    <>
                    <img src={user?.photoURL} className="w-10 h-10 object-cover  relative rounded-full" alt="user" 
                    />
                    </>
                   : 
                    <>
                    <img  className="w-10  h-10 object-cover relative rounded-full"
                      src="https://i.ibb.co/HNhj8V6/download-2.png " alt='avatar'
                     
                    />
                    </>

                  }

                  <span tabIndex={0} className="m-auto">
                    
                    
              
                 {
                  user?.displayName?.length >4 &&   user?.displayName?.slice(0, 2)
                 }

                    
                  </span>
                  <span
                    tabIndex={0}
                    className="  top-9 left-1/2  absolute    mx-auto "
                  >
                    <AiFillCaretDown></AiFillCaretDown>
                  </span>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link  className="">
                    {user?.displayName}
                  </Link>
                </li>

                <li>
                  <Link to="/myprofile" className="">
                    Profile
                  </Link>
                </li>

                <li>
                  <button onClick={handlogout}>Logout</button>
                </li>
              </ul>
            </div>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <div className="pt-4 pb-2 px-6">
                        <a href="#!">
                          <div className="flex items-center">
                            <div className="shrink-0">
                              <img
                                src={user.photoURL}
                                className="rounded-full w-20"
                                alt="Avatar"
                              />
                            </div>
                            <div className="grow ml-3">
                              <p className="text-sm font-semibold text-blue-600">
                                {user?.displayName}
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>

                      <li>
                        <Link
                          to="/myprofile"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

