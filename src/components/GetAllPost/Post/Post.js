import React, { useContext } from "react";
import { userContext } from "../../.././AuthContext/AuthContext";

import { toast } from "react-hot-toast";
import moment from "moment";
import { useState } from "react";

const Post = () => {
  const { user } = useContext(userContext);
  const imagehostkey = "361db61aaf2e5a08fc416c3257898005";
  const [img, setImg] = useState("");
  const [text, setText] = useState("");

  const handleImgUpload = e => {
    const img = e.target;
    const media = img.files[0];
    const formdata = new FormData();
    formdata.append("image", media);
    const url = `https://api.imgbb.com/1/upload?key=${imagehostkey}`;

    fetch(url, {
      method: "POST",
      body: formdata
    })
      .then(res => res.json())
      .then(imageData => {
        const photo = imageData.data.display_url;

        setImg(photo);
      })
      .catch(ero => {});
  };

  const savepostDatabase = () => {
    if (img === "" && text === "") {
      return toast.error("Please enter a photo or text");
    }

    const postTime = moment().format("lll");
    const createPost = {
      email: user?.email,
      postUserName: user?.displayName,
      PostUserpik: user?.photoURL,
      media: img,
      postTitle: text,
      postTime: postTime
    };

    fetch("http://localhost:5000/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(createPost)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data.acknowledged) {
      
          toast.success("Post successfully");
          setImg("");
          setText("");
        }
      })
      .catch(erro => toast.error(erro.message));
  };

  return (
    <div>
      <div className="bg-base-300 py-7 rounded-sm">
        <div className="flex justify-center mb-3 items-center">
          {img && (
            <img className="w-[150px] h-[150px] rounded    " src={img} alt="" />
          )}
        </div>

        <div className="  flex flex-col  justify-center ">
          <div className="flex mx-2 items-center w-full">
            {user?.photoURL ? (
              <img
                src={user?.photoURL}
                name="userphoto"
                alt="userPhoto"
                className="w-14 h-14 mr-3 object-cover rounded-full"
              />
            ) : (
              <img
                src="https://i.ibb.co/HNhj8V6/download-2.png"
                alt="avatar"
                className="w-10 h-10 mr-3  rounded-full"
              />
            )}

            <>
              <div className="flex items-center px-3 py-2 rounded-lg mr-3 w-full bg-gray-50 dark:bg-gray-700">
                <label className=" flex flex-col items-center px-4 py-6    cursor-pointer ">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <input
                    type="file"
                    name="usermedia"
                    onChange={handleImgUpload}
                    className="hidden"
                  />
                </label>

                <textarea
                  id="chat"
                  value={text}
                  name="usertext"
                  onChange={e => setText(e.target.value)}
                  rows={1}
                  className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="write something ....?"
                />
                <button
                  onClick={() => savepostDatabase()}
                  className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 rotate-90"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
