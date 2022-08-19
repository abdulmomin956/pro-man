import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.init";
// import Loading from "../shared/Loading";
import "./Profile.css";
import { useForm } from "react-hook-form";
import ProfileNav from "./ProfileNav";

const Profile = () => {
  const [user] = useAuthState(auth);
  const name = user?.displayName;
  const userPhoto = user?.photoURL;
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

  };
  return (
    <div>
      <div className="top-use-info">
        <div
          className="flex justify-center w-screen items-center top-use-info-banner py-12 border"
          style={{ background: "#F4F5F7" }}
        >
          <div className="avatar p-5">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={userPhoto} />
            </div>
          </div>
          <div className="p-5">
            <h2 className="font-bold text-4xl">{name}</h2>
          </div>

        </div>
        <ProfileNav></ProfileNav>
        <div className="profilebody">
          <div className="profilebody-image py-12">
            {" "}
            <img src="https://i.ibb.co/mGkjjT0/Screenshot-2.png" alt="" />

          </div>
          <div>
            <h2 className="profilebody-heading text-3xl font-bold py-7">Manage your personal information</h2>
            <div className="profilebody-doc p-7">
              <p className="pb-3" > This is an Atlassian account. Edit your personal information and visibility settings through your Atlassian profile.</p>
              <p>To learn more, view our Terms of Service or Privacy Policy.</p>

            </div>
          </div>
          <div className="profilebody_about">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" mt-20"
            >
              <h3 className="font-bold text-lg board-modal-title text-center">
                Update yoursalf
              </h3>
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="text-sm font-bold board-modal-title">
                    Username
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  {...register("userName", {
                    required: {
                      value: true,
                      message: "Board Title is Required",
                    },
                  })}
                />
              </div>
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="text-sm font-bold board-modal-title">
                    Bio
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  {...register("bio", {
                    required: {
                      value: true,
                      message: "Board Title is Required",
                    },
                  })}
                />
              </div>

              <div className="modal-action my-6">
                <button
                  type="submit"
                  className="btn  text-white w-full  transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-lg rounded-lg focus:border-4 border-indigo-300"
                >
                  save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
