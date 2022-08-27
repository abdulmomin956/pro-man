import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.init";
import Loading from "../shared/Loading";
import "./Profile.css";
import ProfileNav from "./ProfileNav";

import { Outlet } from "react-router-dom";

const Profiles = () => {
  const [user, loading] = useAuthState(auth);
  const name = user?.displayName;
  const userPhoto = user?.photoURL;
  const email = user?.email;
  const [profiles, setProfiles] = useState({});

  useEffect(() => {
    fetch(`https://morning-coast-54182.herokuapp.com/profile/${email}`)
      .then(res => res.json())
      .then(data => setProfiles(data))
  }, [email])
  if (loading) {
    return (
      <Loading></Loading>
    );
  }
  const userName = profiles.userName;

  return (
    <div>
      <div className="top-use-info">
        <div
          className="flex justify-center w-screen items-center top-use-info-banner py-12 "
          style={{ background: "#F4F5F7" }}
        >
          <div className="avatar p-5">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={userPhoto} alt="" />
            </div>
          </div>
          <div className="p-5">
            <h2 className="font-bold text-4xl">{userName ? userName : name}  </h2>
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

export default Profiles;
