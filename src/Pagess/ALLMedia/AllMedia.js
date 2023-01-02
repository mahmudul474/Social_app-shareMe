 
import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Media from './Media';

const AllMedia = () => {

    const [medias, setAllmedia] = useState([])
 

    useEffect(()=>{
   fetch("https://social-server-sooty.vercel.app/allposts")
   .then(res=>res.json())
   .then(data=>{
    setAllmedia(data)
   })


},[medias])


    
    return (
        <div>
            <Header></Header>
            <div><h2 className='p-10 text-xl font-bold'>ALL Media</h2></div>
             <div className=' grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 p-8'>
            {
                medias?.map(media =><Media medias ={media} key={media._id} ></Media>)
            } 
        </div>
       </div>
    );
};

export default AllMedia;