import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          {/* <!-- Page content here --> */}
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
              <a>Boards</a>
            </li>
            <li>
              <a>Tables</a>
            </li>
            <li>
              <a>Calendar</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
