import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.init";
import BoardModal from "./BoardModal";
import { useSelector } from "react-redux";
import WorkspaceModal from "./WorkspaceModal";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import {
  setUser,
  setLoadWorkspace,
  setWorkspace,
  setMembersWorkspace,

  // setWorkspaceID,
} from "../../global-state/actions/reduxActions";
import { FaRegBell, FaBoxes } from "react-icons/fa";
import { MdGroupWork } from "react-icons/md";
import Notification from "./Notification";
import TempleteBoard from "./TempleteBoard";
import StarredBoard from "./StarredBoard";
import logo from "../../images/logo.png";

// FiBell

const Navbar = () => {
  const role = useSelector((state) => state.user?.role);
  const [user] = useAuthState(auth);
  const [initials, setInitial] = useState("");
  const [open, setOpen] = useState(false);
  const [openTemp, setOpenTemp] = useState(false);
  const loadWorkspaceState = useSelector((state) => state.loadWorkspace);
  const email = useSelector((state) => state.user?.email);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { data, refetch } = useQuery(["repoData", email], () =>
    fetch(`https://morning-coast-54182.herokuapp.com/workspace/${email}`).then(
      (res) => res.json()
    )
  );
  // console.log(email);
  const { data: membersData, refetch: memberRefetch } = useQuery(
    ["memberData", email],
    () =>
      fetch(`http://localhost:5000/workspace/memberEmail/${email}`).then(
        (res) => res.json()
      )
  );
  useEffect(() => {
    if (loadWorkspaceState) {
      refetch();
      memberRefetch();
      dispatch(setLoadWorkspace(false));
    }
  }, [dispatch, loadWorkspaceState, refetch, memberRefetch]);

  useEffect(() => {
    if (data?.length > 0) {
      // console.log(allWorkspaceData);
      dispatch(setWorkspace(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (membersData?.length > 0) {
      dispatch(setMembersWorkspace(membersData));
    }
  }, [membersData, dispatch]);

  useEffect(() => {
    if (user) {
      const x = user?.displayName;
      const nameparts = x?.split(" ");
      setInitial(
        nameparts[0]?.charAt(0)?.toUpperCase() +
          nameparts[1]?.charAt(0)?.toUpperCase()
      );
    }
  }, [user, user?.displayName]);

  // console.log(membersData);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("token");
    dispatch(setUser(null));
    navigate("/");
  };

  return (
    <div className=" text-txtColor">
      <div style={{ zIndex: 200 }} className="navbar bg-bg-100 w-full shadow">
        <div className="navbar-start lg:px-12">
          {/* this is dropdown menu for mobile view  */}
          {role !== "Admin" && (
            <div className="dropdown">
              <label tabIndex="0" className="btn    lg:hidden">
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
                  <p
                    className="justify-between mb-2 p-2 pl-5 pr-5  hover:border-1"
                    style={{ borderRadius: "0px" }}
                  >
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
                  <ul className="py-2  bg-base-100 rounded w-52 pt-4 shadow">
                    {data?.map((item, i) => (
                      <li key={i}>
                        <Link
                          to={"/" + item?.shortname}
                          className="mb-2 btn-sm w-full rounded-none   "
                          style={{ borderRadius: "0px" }}
                        >
                          <span className="  text-txtColor font-bold rounded px-1 uppercase bg-indigo-400">
                            {item?.title?.charAt(0)}
                          </span>
                          {item?.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li tabIndex="0">
                  <button
                    className=" p-2 pl-5 pr-5  "
                    style={{ borderRadius: "0px" }}
                  >
                    Create
                  </button>
                  <ul className="py-2 bg-base-100 rounded w-52 pt-4 shadow">
                    <li>
                      {/* <!-- The button to open modal --> */}
                      <label
                        htmlFor="my-modal-6"
                        className="mb-2 btn-sm w-full  myButton "
                        style={{ borderRadius: "0px" }}
                      >
                        Create Board
                      </label>

                      {/* <!-- Put this part before </body> tag my-modal-sa6 --> */}
                    </li>
                    <li>
                      <label
                        htmlFor="my-modal-sa6"
                        className="mb-2 btn-sm w-full   myButton"
                        style={{ borderRadius: "0px" }}
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
          )}

          <div className="navbar-start w-full navTitle">
            <Link
              to={role === "Admin" ? "/" : "/my-board"}
              className="lg:mx-5  flex items-center justify-start"
            >
              <img
                style={{ height: "32px", minWidth: "90px" }}
                src={logo}
                alt="logo"
              />
            </Link>
          </div>

          {role !== "Admin" && (
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal p-0 m-0">
                <div className="dropdown">
                  <label
                    tabIndex="0"
                    className="btn font-black   text-txtColor border-0 btn-sm rounded-none mx-1 "
                    style={{ fontWeight: 500, backgroundColor: "transparent" }}
                  >
                    Workspaces{" "}
                    <p>
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    </p>
                  </label>
                  <ul
                    tabIndex="0"
                    className="dropdown-content menu py-2 bg-base-100 rounded w-52 pt-4 shadow"
                  >
                    {data?.map((item, i) => (
                      <li key={i}>
                        <Link
                          to={"/" + item?.shortname}
                          className="mb-2 px-2 py-1 w-full  myButton"
                          style={{ borderRadius: "0px" }}
                        >
                          <span className="  font-bold rounded-sm px-1 uppercase">
                            {item?.title?.charAt(0)}
                          </span>
                          {item?.title}
                        </Link>
                        {/* <a className="mb-2 px-2 py-1 w-full  transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-lg rounded-lg focus:border-4 border-indigo-300">{item?.title}</a> */}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="dropdown">
                  <label
                    tabIndex="0"
                    className="btn btn-sm mx-1 bg-transparent    text-txtColor border-0   rounded-none font-bold"
                    style={{ fontWeight: 500, backgroundColor: "transparent" }}
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
                        className="mb-2 btn-sm w-full  myButton "
                        style={{ borderRadius: "0px" }}
                      >
                        <FaBoxes></FaBoxes>Create Board
                      </label>

                      {/* modal */}
                    </li>
                    <li>
                      <label
                        htmlFor="my-modal-sa6"
                        className="mb-2 btn-sm w-full  myButton "
                        style={{ borderRadius: "0px" }}
                      >
                        <MdGroupWork></MdGroupWork> Create Workspace
                      </label>
                    </li>
                  </ul>
                </div>

                <div className="dropdown">
                  <label
                    onClick={() => setOpen(!open)}
                    tabIndex="0"
                    className="btn btn-sm mx-1 bg-transparent   text-txtColor border-0   rounded-none font-bold"
                    style={{ fontWeight: 500, backgroundColor: "transparent" }}
                  >
                    Starred
                    <p>
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    </p>
                  </label>

                  {open && (
                    <StarredBoard setOpen={setOpen} open={open}></StarredBoard>
                  )}
                </div>

                <div className="dropdown">
                  <label
                    onClick={() => setOpenTemp(!openTemp)}
                    tabIndex="0"
                    className="btn btn-sm mx-1 bg-transparent   text-txtColor border-0 h-full   rounded-none font-bold"
                    style={{ fontWeight: 500, backgroundColor: "transparent" }}
                  >
                    Templetes
                    <p>
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    </p>
                  </label>
                  {openTemp && (
                    <TempleteBoard
                      setOpenTemp={setOpenTemp}
                      openTemp={openTemp}
                    ></TempleteBoard>
                  )}
                </div>
              </ul>
            </div>
          )}
        </div>

        <div className="navbar-end lg:px-12">
          <label
            htmlFor="notification"
            className=" cursor-pointer modal-button"
          >
            <FaRegBell className="text-2xl   text-txtColor mr-3" />
          </label>

          {user && (
            <div className="dropdown dropdown-end">
              <label
                tabIndex="0"
                className=" "
                // className="btn btn-ghost btn-circle bg-black avatar"
              >
                <div
                  id="navProfile"
                  className="flex justify-center items-center"
                >
                  <span title={user?.displayName} className=" font-bold block ">
                    {initials}
                  </span>
                </div>
              </label>
              <ul
                tabIndex="0"
                className="mt-3  shadow menu menu-compact dropdown-content bg-base-100 rounded w-52"
              >
                <li>
                  <Link
                    to="/profile"
                    className="justify-between   mb-2 btn-sm w-full   "
                  >
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <p className="mb-2 btn-sm w-full   ">Settings</p>
                </li>
                <li>
                  <Link to="/help">Help </Link>
                  <p className="mb-2 btn-sm w-full   ">Settings</p>
                </li>
                <li>
                  <p onClick={logout} className="btn-sm w-full   ">
                    Logout
                  </p>
                </li>
              </ul>
            </div>
          )}
        </div>
        <WorkspaceModal></WorkspaceModal>
        <BoardModal></BoardModal>
        <Notification></Notification>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
