import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import CommonTopDesign from "./CommonTopDesign";

const Members = () => {
  const { shortname } = useParams();
  console.log(shortname);
  return (
    <div style={{ width: "100%" }}>
      <CommonTopDesign></CommonTopDesign>

      <div className="grid md:grid-cols-4 md:mx-16  my-10">
        <div>
          <p className="text-xl font-bold">Members</p>
          <p className="text-sm font-bold text-gray-500 mb-4">
            Members of Workspace boards
          </p>

          <Link
            to={`/${shortname}/members/`}
            className=" btn btn-block mb-3 font-bold rounded-none btn-primary"
          >
            {" "}
            Workspace Members
          </Link>
          <Link
            to={`/${shortname}/members/guests`}
            className=" btn btn-block mb-3 font-bold rounded-none btn-primary"
          >
            {" "}
            Guests
          </Link>
          <Link
            to={`/${shortname}/members/pending`}
            className=" btn btn-block mb-3 font-bold rounded-none btn-primary"
          >
            {" "}
            Pending
          </Link>
        </div>
        <div className=" col-span-3 mx-4">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Members;
