import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Link } from "react-router-dom";
import auth from "../firebase/firebase.init";
import workspaceModal from './WorkspaceModal'
import BoardModal from "./BoardModal";
import Loading from "./Loading";
import axios from "axios";
import { useSelector } from "react-redux";
import WorkspaceModal from "./WorkspaceModal";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { setWorkspace } from "../../global-state/actions/reduxActions";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    <Loading />;
  }

  const dispatch = useDispatch();
  const email = user.email;
  const { isLoading, error2, data } = useQuery(['repoData'], () =>
    fetch(`https://morning-coast-54182.herokuapp.com/workspace/${email}`).then(res =>
      res.json()
    )
  );

  useEffect(() => {
    if (data?.length > 0) {
      const allWorkspaceData = data?.map(item => (
        {
          _id: item._id, title: item.title
        }
      ))
      // console.log(allWorkspaceData);
      dispatch(setWorkspace(allWorkspaceData))
    }
  }, [data, dispatch])


  if (isLoading) {
    <Loading></Loading>;
  }


  const allWorkspace = useSelector(state => state.workspace)
  // console.log(allWorkspace);



  const x = user?.displayName;
  const nameparts = x?.split(" ");
  const initials =
    nameparts[0].charAt(0).toUpperCase() + nameparts[1].charAt(0).toUpperCase();
  // console.log(initials);
  const logout = () => {
    signOut(auth);
  };



  return (
    <div>
      <div style={{ zIndex: "200" }} className="navbar bg-accent pb-4 w-full">
        <div className="navbar-start lg:px-12">
          <div className="dropdown">
            <label tabIndex="0" className="btn myButton mb-3 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 py-4 shadow bg-base-100 rounded-lg w-52 "
            >
              <li tabIndex="0">
                <p className="justify-between mb-2 p-2 pl-5 pr-5 myButton"  style={{borderRadius: "0px"}}>
                  Workspaces
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </p>
                <ul
                  className="py-2  bg-base-100 rounded w-52 pt-4 shadow"
                >
                  {allWorkspace?.map((item, i) => (
                    <li key={i}>
                      <a className="mb-2 btn-sm w-full rounded-none  myButton" style={{borderRadius: "0px"}}>
                        <span className="text-white font-bold rounded px-1 uppercase bg-indigo-400">
                          {item?.title?.charAt(0)}
                        </span>
                        {item?.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li tabIndex="0">
                <button className=" p-2 pl-5 pr-5 myButton"  style={{borderRadius: "0px"}}>Create</button>
                <ul
                  className="py-2 bg-base-100 rounded w-52 pt-4 shadow"
                >
                  <li>
                    {/* <!-- The button to open modal --> */}
                    <label
                      htmlFor="my-modal-6"
                      className="mb-2 btn-sm w-full  myButton"
                      style={{borderRadius: "0px"}}
                    >
                      Create Board
                    </label>

                    {/* <!-- Put this part before </body> tag my-modal-sa6 --> */}
                  </li>
                  <li>
                    <label
                      htmlFor="my-modal-sa6"
                      className="mb-2 btn-sm w-full  myButton"
                      style={{borderRadius: "0px"}}
                    >
                      Create Workspace
                    </label>
                  </li>
                </ul>
                {/* <!-- The button to open modal --> */}

                {/* <!-- Put this part before </body> tag --> */}
              </li>
            </ul>
          </div>
          <a href="/" className="navTitle lg:mx-5">
            PRO-MAN
          </a>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <div className="dropdown">
                <label
                  tabIndex="0"
                  className="btn font-black btn-md m-1 myButton"
                  style={{ fontWeight: 700 }}
                >
                  Workspaces{" "}
                  <a>
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </a>
                </label>
                <ul
                  tabIndex="0"
                  className="dropdown-content menu py-2 bg-base-100 rounded w-52 pt-4 shadow"
                >
                  {allWorkspace?.map((item, i) => (
                    <li key={i}>
                      <a className="mb-2 px-2 py-1 w-full myButton"  style={{borderRadius: "0px"}}>
                        <span className="text-white font-bold rounded-sm px-1 uppercase bg-indigo-400">
                          {item?.title?.charAt(0)}
                        </span>
                        {item?.title}
                      </a>
                      {/* <a className="mb-2 px-2 py-1 w-full  transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-lg rounded-lg focus:border-4 border-indigo-300">{item?.title}</a> */}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="dropdown">
                <label
                  tabIndex="0"
                  className="btn  btn-md m-1  myButton font-bold"
                >
                  Create
                </label>
                <ul
                  tabIndex="0"
                  className="dropdown-content menu py-2 bg-base-100 rounded w-52 pt-4 shadow"
                >
                  <li>
                    {/* <!-- The button to open modal --> */}
                    <label
                      htmlFor="my-modal-6"
                      className="mb-2 btn-sm w-full  myButton"
                      style={{borderRadius: "0px"}}
                    >
                      Create Board
                    </label>

                    {/* modal */}
                  </li>
                  <li>
                    <label
                      htmlFor="my-modal-sa6"
                      className="mb-2 btn-sm w-full  myButton"
                      style={{borderRadius: "0px"}}
                    >
                      Create Workspace
                    </label>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>

        <div className="navbar-end lg:px-12">
          {user && (
            <div className="dropdown dropdown-end">
              <label
                tabIndex="0"
                className="btn btn-ghost btn-circle bg-black avatar"
              >
                <div className="w-10 rounded-full flex justify-center items-center">
                  <span
                    title={user.displayName}
                    className="text-white font-bold block mt-3"
                  >
                    {initials}
                  </span>
                </div>
              </label>
              <ul
                tabIndex="0"
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                <Link to="/profile" className="justify-between   mb-2 btn-sm w-full  myButton">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                 
                </li>
                <li>
                  <a className="mb-2 btn-sm w-full  myButton">Settings</a>
                </li>
                <li>
                  <p onClick={logout} className="mb-2 btn-sm w-full  myButton">
                    Logout
                  </p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <WorkspaceModal></WorkspaceModal>
      <BoardModal></BoardModal>
    </div>
  );
};

export default Navbar;
