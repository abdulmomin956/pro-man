import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          {/* <!-- Page content here --> */}
          <Outlet />
          <label for="my-drawer-2" class="btn drawer-button lg:hidden">
            <FaArrowAltCircleRight className="text-3xl"></FaArrowAltCircleRight>
          </label>
        </div>
        <div
          class="drawer-side lg:mx-7 rounded"
          style={{ boxShadow: `2px 5px 15px rgba(0, 0, 0, 0.25)` }}
        >
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
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
