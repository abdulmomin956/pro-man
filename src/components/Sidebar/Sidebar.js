import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div>
      <div className="drawer drawer-mobile static">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <Outlet />
          <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden absolute top-10 left-0">
            <FaArrowAltCircleRight className="text-3xl"></FaArrowAltCircleRight>
          </label>
        </div>
        <div
          className="drawer-side lg:mx-7 rounded"
          style={{ boxShadow: `2px 5px 15px rgba(0, 0, 0, 0.25)` }}
        >
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li >
              <NavLink to='/' className="mb-2 p-2 pl-5 pr-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-lg rounded-lg focus:border-4 border-indigo-300 hover:translate-x-1">Boards</NavLink>
            </li>
            <li>
              <NavLink to='/template' className="mb-2 p-2 pl-5 pr-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-lg rounded-lg focus:border-4 border-indigo-300 hover:translate-x-1">Templates</NavLink>
            </li>
            <li>
              <NavLink to='/homescreen' className="p-2 pl-5 pr-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-lg rounded-lg focus:border-4 border-indigo-300 hover:translate-x-1">Home</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
