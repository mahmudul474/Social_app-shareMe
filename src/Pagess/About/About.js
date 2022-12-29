import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { userContext } from '../../AuthContext/AuthContext'
import UserAbout from './UserAbout'

const About = () => {
const {user}=useContext(userContext)


const url=`http://localhost:5000/userabout?email=${user?.email}`

const {data:aboutuser=[]}=useQuery({
  queryKey:["aboutuser"],
  queryFn:async()=>{
    const res=await fetch(url)
    const data=await res.json()
    return data

  }
})


console.log(aboutuser)








  return (
    <div >
  
        {
          aboutuser?.map(user =><UserAbout user={user} key={user._id}></UserAbout>)
        }
    </div>
  )
}

export default About
