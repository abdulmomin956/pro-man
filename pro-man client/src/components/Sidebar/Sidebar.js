import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";

const Sidebar = () => {
  return (
    <div>
      <div className="drawer drawer-mobile static">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="drawer-button cursor-pointer ml-5 mt-4  lg:hidden absolute top-10 left-0"
          >
            <FaArrowAltCircleRight className="text-3xl"></FaArrowAltCircleRight>
          </label>
        </div>
        <div className="drawer-side lg:mx-7 rounded shadow">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <NavLink to="/" className="mb-2 p-2 pl-5 pr-5 myButton">
                Boards
              </NavLink>
            </li>
            <li>
              <NavLink to="/template" className="mb-2 p-2 pl-5 pr-5 myButton">
                Templates
              </NavLink>
            </li>
            <li>
              <NavLink to="/homescreen" className="mb-2 p-2 pl-5 pr-5 myButton">
                Home
              </NavLink>
            </li>

            <div className="flex items-center justify-between bg-none mt-5">
              <p>Workspace</p>
              <label htmlFor="my-modal-sa6" className="myButton p-1 rounded-sm cursor-pointer">
                <MdAddCircleOutline className="text-xl  "></MdAddCircleOutline>
              </label>
            </div>

            <div>
              <div>
                
              </div>



            </div>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;