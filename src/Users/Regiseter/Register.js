import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../AuthContext/AuthContext";
import Google from "../SocialUSer/Google";

const Register = () => {
  const { createuser, uptadeUser, setLoading } = useContext(userContext);
  const [eroo, setErro] = useState("");
  const navigate = useNavigate();

  const imagehostkey = "361db61aaf2e5a08fc416c3257898005";

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();



  const handleRegister = data => {
    const image = data.photo[0];

    const formdata = new FormData();
    formdata.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imagehostkey}`;

    fetch(url, {
      method: "POST",
      body: formdata
    })
      .then(res => res.json())
      .then(imagedata => {
        ///userphot
        const photo = imagedata.data.display_url;

        //craate user
        createuser(data.email, data.password)
          .then(result => {
            setErro("");

            const user = result.user;
            //uptade user
            useruptade(data.name, photo);
            //save user
            navigate("/home");
            saveduser(data.name, data.email, photo);
          })
          .catch(err => {
            const message = err.message;
            setErro(message);
            alert(message);
          });
      });
  };

  //user  uptade
  const useruptade = (name, photo) => {
    const userinfo = {
      displayName: name,
      photoURL: photo
    };
    uptadeUser(userinfo)
      .then(() => {})
      .catch((ero) => {
        setErro(ero.message);
      });
  };

  ///save user info monog

  const saveduser = (name, email, photo) => {
    const userdettailse = {
      name: name,
      email: email,
      photoURL: photo
    };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userdettailse)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          setLoading(true);
          toast.success("user  registered successfully", 90000);
        }
      });
  };

  return (
    <div className="bg-slate-600 min-h-screen  rounded-xl flex flex-col bg-base-300">
      <div className="container max-w-lg rounded-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white lg:w-[500px] rounded-lg p-5">
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="  px-6 rounded   text-black w-full"
          >
            <h1 className=" text-3xl text-center">Register</h1>

            <p className="text-red-700 capitalize">{eroo}</p>
            <input
              {...register("name", {
                required: true,
                minLength: {
                  value: 4,
                  message: "name must be 4 characters long"
                }
              })}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mt-4"
              name="name"
              placeholder="Full Name"
            />

            <p className="text-left text-red-600 capitalize">
              {errors?.name && <span>{errors?.name?.message}</span>}
            </p>

            <input
              type="file"
              required
              {...register("photo", { required: "photo is required" })}
              className="block border border-grey-light w-full p-3 rounded mt-4"
            />

            {errors?.photo && (
              <p className="text-left text-red-600 capitalize mb-2">
                {errors.photo.message}
              </p>
            )}

            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "email is required" })}
              className="block border border-grey-light w-full p-3 rounded mt-4"
            />

            {errors?.email && (
              <p className="text-left text-red-600 capitalize mb-2">
                {errors.email.message}
              </p>
            )}

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mt-6"
              name="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long"
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters"
                }
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-left">
                {errors.password.message}
              </p>
            )}

            <button
              type="submit"
              className=" s:w-full text-center m-auto block py-3 rounded btn btn-wide text-white hover:bg-green-dark focus:outline-none my-3"
            >
              Create Account
            </button>

            <div className="text-left my-3">
              <p>
                Already have a acoutn{" "}
                <Link
                  className=" underline underline-offset-1 text-green-500 text-xl ml-2"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
          <Google></Google>
        </div>
      </div>
    </div>
  );
};

export default Register;
