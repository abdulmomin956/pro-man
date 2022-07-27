import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

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
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to='/'>Boards</Link>
            </li>
            <li>
              <Link to='/template'>Templates</Link>
            </li>
            <li>
              <Link to='/homescreen'>Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
