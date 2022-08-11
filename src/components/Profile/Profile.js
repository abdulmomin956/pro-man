import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.init";
import Loading from "../shared/Loading";
import "./Profile.css";
import { useForm } from "react-hook-form";
import ProfileNav from "./ProfileNav";

import { Outlet } from "react-router-dom";

const Profile = () => {
  const [user] = useAuthState(auth);
  const name = user?.displayName;
  const userPhoto=user?.photoURL;

  return (
    <div>
      <div className="top-use-info">
        <div
          className="flex justify-center w-screen items-center top-use-info-banner py-12 "
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
          <Outlet></Outlet>


           
        </div>
      </div>
    </div>
  );
};

export default Profile;
