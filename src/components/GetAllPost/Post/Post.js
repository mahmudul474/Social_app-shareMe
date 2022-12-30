import React, { useContext } from 'react'
import { userContext } from '../../.././AuthContext/AuthContext'
import { BsArrowRight} from "react-icons/bs";
import { toast } from 'react-hot-toast';
import moment from 'moment';



const Post = ({refetch}) => {
  
  const {user,}=useContext(userContext)

  


  const imagehostkey="361db61aaf2e5a08fc416c3257898005";

const handlePost=(event)=>{
event.preventDefault()

const from=event.target;
const userloaction=from.userloaction.value;
const usertext=from.usertext.value;





const  usermedia=from.usermedia.files[0]
  const formdata=new  FormData()
  formdata.append("image",usermedia)

const url=`https://api.imgbb.com/1/upload?key=${imagehostkey}`

fetch(url,{
method: 'POST',
body:formdata,
})
.then(res=>res.json())
.then(imageData=>{

  const photo=imageData.data.display_url

  
  if(imageData.success){
    refetch()
    savepostDatabase(usertext,userloaction,photo)
    from.reset()

  }



  
}).catch (ero=>{
  console.log(ero)
  savepostDatabase(usertext,userloaction)
  from.reset()
  
})

 
}



const  savepostDatabase=(titile,location,media,)=>{

   const postTime=moment().calendar();



  const createPost={
    postUser:user?.email,
    postUserName:user?.displayName,
    PostUserpik:user?.photoURL,
    media:media,
    postTitle:titile,
    postLocation:location,
    postTime:postTime,
  }

  fetch("http://localhost:5000/post",{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(createPost),
  })
  .then(res=>res.json())
 .then(data=>{
    console.log(data)
    refetch()
    
    if(data.acknowledged){
     
      refetch()
      toast.success("Post successfully")
      

     }
 }).catch(erro=>console.log(erro))


}





  return (
    <div>
      <form  onSubmit={handlePost} className="bg-base-300 py-7 rounded-xl">
        <div className="parent flex flex-col justify-center items-center ">
          <div className="flex justify-center items-center">
            {
              user?.photoURL ?<img
              src={user?.photoURL}
              name="userphoto"
              alt="userPhoto"
              className="w-14 h-14 mr-3 object-cover rounded-full"
            /> :<img
              src="https://i.ibb.co/HNhj8V6/download-2.png"
              alt="avatar"
              className="w-10 h-10 mr-3  rounded-full"
            />
            }
     
      

            <textarea
            required
            name='usertext'
              className="border  lg:w-[500px] md:w-[400px] sm:w-[400px] border-black rounded-lg p-3  capitalize"
              placeholder="what is youre mind??"
            />
          </div>

          <div className="flex items-center my-6 px-2 sm:flex-row">
            <h3 className=" flex  justify-center items-center text-lg capitalize font-bold  ">Add youre photo media <span className='ml-3 text-xl'><BsArrowRight></BsArrowRight></span></h3>

            <div className="flex items-center my-4">
              <label htmlFor="photo">
            
              </label>
              <input
                type='file'
                
                id="photo"
                name="usermedia"
                className="  border-none"
              />
              <p>
                
                <input
                  type="text"
                  name='userloaction'                  
                  placeholder="location ????? "
                  className="border p-2 capitalize  lg:w-[260px]"
                />
              </p>
            </div>
          </div>
        </div>


        <button  type='submit' className="btn no-animation px-14">Post </button>


      </form>
    </div>
  )
}

export default Post


/////https://www.youtube.com/watch?v=a8KruvMkEtY