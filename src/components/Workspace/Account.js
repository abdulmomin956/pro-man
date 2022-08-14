import React, { useState } from "react";
import "./Account.css";
import CommonTopDesign from "./CommonTopDesign";
import { MdLockOutline, MdPublic } from "react-icons/md";

const Account = () => {
  const [visibility, setVisibility] = useState(true);
  return (
    <div style={{ width: "100%" }}>
      <CommonTopDesign></CommonTopDesign>

      <div className=" w-9/12 mx-auto">
        <p className="text-xl font-bold">Seeting</p>
        <p className="text font-semibold">Workspace visibility</p>
        <hr className="my-3"></hr>
        <div className="flex justify-between items-center">
          {visibility ? (
            <p className="text-sm inline-block pr-5">
              <span className="flex items-center font-bold">
                <MdLockOutline className=" text-red-700"></MdLockOutline>{" "}
                Private{" "}
              </span>
              This Workspace is private. It's not indexed or visible to those
              outside the Workspace.
            </p>
          ) : (
            <p className="text-sm inline-block pr-5">
              <span className="flex items-center font-bold">
                <MdPublic className=" text-green-700"></MdPublic> Public{" "}
              </span>
              This Workspace is public. It's visible to anyone with the link
              and will show up in search engines like Google. Only those invited
              to the Workspace can add and edit Workspace boards.
            </p>
          )}

          {/* <span className="btn btn-sm" >Change</span> */}

          <div className="dropdown dropdown-end">
            <label tabIndex="0" className=" ">
              <div className="flex justify-center items-center">
                <span className=" font-bold block ">
                  <span className="small-button">Change</span>
                </span>
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3  shadow menu menu-compact dropdown-content bg-base-100 rounded w-64"
            >
              <li onClick={() => setVisibility(true)}>
                <p className="text-xs inline-block">
                  <span className="flex items-center font-bold">
                    <MdLockOutline className=" text-red-700"></MdLockOutline>{" "}
                    Private{" "}
                  </span>
                  This Workspace is private. It's not indexed or visible to
                  those outside the Workspace.
                </p>
              </li>

              <li onClick={() => setVisibility(false)}>
                <p className="text-xs inline-block">
                  <span className="flex items-center font-bold">
                    <MdPublic className=" text-green-700"></MdPublic> Public{" "}
                  </span>
                  This Workspace is public. It's visible to anyone with the link
                  and will show up in search engines like Google. Only those
                  invited to the Workspace can add and edit Workspace boards.
                </p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Account;
