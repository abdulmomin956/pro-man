import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Link } from "react-router-dom";
import auth from "../firebase/firebase.init";
import Workspace from "../Workspace/Workspace";
import BoardModal from "./BoardModal";
import Loading from "./Loading";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    <Loading />;
  }
  const x = user?.displayName;
  const nameparts = x?.split(" ");
  const initials =
    nameparts[0].charAt(0).toUpperCase() + nameparts[1].charAt(0).toUpperCase();
  // console.log(initials);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div style={{ zIndex: "200" }} className="navbar bg-accent">
      <div className="navbar-start lg:px-12">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li tabIndex="0">
              <p className="justify-between">
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
              <ul className="p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li tabIndex="0">
              <button>Create</button>
              <ul className="p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                  {/* <!-- The button to open modal --> */}
                  <label for="my-modal-6" class="btn modal-button">
                    Create Board
                  </label>

                  {/* <!-- Put this part before </body> tag my-modal-sa6 --> */}
                  
                  <BoardModal></BoardModal>
               
                </li>
                <li>
                <label for="my-modal-sa6" class="btn modal-button">
                    Create Workspace
                  </label>
                </li>
              </ul>
              {/* <!-- The button to open modal --> */}

              {/* <!-- Put this part before </body> tag --> */}
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-xl">
          PRO-MAN
        </a>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-md m-1">
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
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <label tabIndex="0" className="btn  btn-md m-1">
                Create
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
               
                <li>
                  {/* <!-- The button to open modal --> */}
                  <label for="my-modal-6" class="btn modal-button">
                    Create Board
                  </label>

                 {/* modal */}
                  
                  <BoardModal></BoardModal>
                 
               
                </li>
                <li>
                <label for="my-modal-sa6" class="btn modal-button">
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
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <p onClick={logout}>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
           <Workspace></Workspace>
    </div>
  );
};

export default Navbar;
