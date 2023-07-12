 
import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Media from './Media';
import SingelPost from "../../components/GetAllPost/SingelPost";

const AllMedia = () => {
  const [medias, setAllmedia] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allposts")
      .then(res => res.json())
      .then(data => {
        setAllmedia(data);
      });
  }, [medias]);

  return (
    <div>
      <Header></Header>
      <div>
        <h2 className="p-10 text-xl font-bold">ALL Media</h2>
      </div>
      <div className="grid  px-10  grid-cols-1 gap-5  lg:grid-cols-3">
        {[...medias]?.reverse().map(media => (
          <SingelPost key={media._id} spost={media}></SingelPost>
        ))}
      </div>
    </div>
  );
};

export default AllMedia;

