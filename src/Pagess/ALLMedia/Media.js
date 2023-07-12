import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Count from "../../Shared/Count/Count";

const Media = ({ medias }) => {
  const { PostUserpik, _id, email, media, postTime, postUserName } = medias;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      {media && (
        <figure>
          <img src={media} alt="" className="w-full" />
        </figure>
      )}

      <div className="card-body">
        <div className="flex items-center space-x-4">
          <img className="w-14 h-14 rounded-full" src={PostUserpik} alt="" />
          <h2></h2>
          <div className="font-medium text-left dark:text-white">
            <div>{postUserName}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
