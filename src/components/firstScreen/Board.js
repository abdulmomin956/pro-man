import React from "react";
import {
  FaBoxes,
  FaUserFriends,
  FaCogs,
  FaRegPlusSquare,
} from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setWorkspaceID } from "../../global-state/actions/reduxActions";
import LoardBoard from "./LoardBoard";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Board = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.workspace);
  const membersWorkspace = useSelector((state) => state.membersWorkspace);
  const [popularTemplates, setPopularTemplates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://13.126.5.141:5000/template")
      .then((res) => res.json())
      .then((data) => setPopularTemplates(data.slice(2, 7)));
  }, []);

  return (
    <div className="m-8" id="sidebarOverflow">
      {/* This Board pages showing when enter to the site */}
      <h2 className="text-2xl font-medium mb-6">
        <span className="flex items-center text-black">
          <FaBoxes className="mr-3"></FaBoxes>Most popular templates
        </span>
      </h2>
      {/* **Most popular template section start here** */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 "
        id="sidebarOverflow"
      >
        {popularTemplates.map((template) => (
          <div
            onClick={() => navigate("/category/" + template._id)}
            key={template._id}
            className="px-1 h-28 rounded-md cursor-pointer hover:shadow-2xl"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(${template.bg})`,
            }}
          >
            <p className="bg-white text-xs text-black font-medium w-[65px] text-center py-1 mt-2 mx-2 rounded-md">
              Template
            </p>
            <p className="my-1 mx-2 text-sm font-semibold text-white ">
              {template.title}{" "}
            </p>
          </div>
        ))}
      </div>
      {/* **Most popular template section End here** */}

      {/* **Your Workspace section start here** */}
      <div className="my-16">
        <p className="text-2xl font-bold text-gray-500">YOUR WORKSPACES</p>
        <hr className="mt-3" />
        {/*  User all workspaces start here  */}
        {data?.map((item) => (
          <div key={item._id} className=" my-5">
            <div className="md:flex items-center justify-between">
              <div className="flex items-center flex-row gap-2">
                <span className="bg-black text-2xl font-bold rounded text-white px-2 pb-1 uppercase">
                  {item?.title?.charAt(0)}
                </span>
                <h2 className="text-xl font-bold text-black">{item?.title}</h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
                <div className="p-0 m-0">
                  <Link
                    onClick={() => {
                      dispatch(setWorkspaceID(item._id));
                    }}
                    to={`/${item.shortname}`}
                    className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-lg font-semibold hover:bg-gray-300 flex items-center"
                  >
                    <FaBoxes className="mr-1 text-sm text-primary"></FaBoxes>{" "}
                    Boards
                  </Link>{" "}
                </div>
                <div>
                  <Link
                    to=""
                    className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-lg font-semibold hover:bg-gray-300 flex items-center"
                  >
                    <HiViewGridAdd className="mr-1 text-sm text-primary"></HiViewGridAdd>{" "}
                    Views
                  </Link>{" "}
                </div>
                <div>
                  <Link
                    onClick={() => {
                      dispatch(setWorkspaceID(item._id));
                    }}
                    to={`/${item.shortname}/members`}
                    className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-lg font-semibold hover:bg-gray-300 flex items-center"
                  >
                    <FaUserFriends className="mr-1 text-sm text-primary"></FaUserFriends>{" "}
                    Members
                  </Link>{" "}
                </div>
                <div>
                  <Link
                    onClick={() => {
                      dispatch(setWorkspaceID(item._id));
                    }}
                    to={`/${item.shortname}/account`}
                    className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-lg font-semibold hover:bg-gray-300 flex items-center"
                  >
                    <FaCogs className="mr-1 text-sm text-primary"></FaCogs>{" "}
                    Settings
                  </Link>{" "}
                </div>
                {/* <div>
                  <Link to="" className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-xl font-semibold hover:font-bold hover:bg-gray-300 flex items-center">
                    <FaRegArrowAltCircleUp className="mr-1 text-sm text-primary"></FaRegArrowAltCircleUp> Upgrade
                  </Link>{" "}
                </div> */}
              </div>
            </div>
            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 my-5 md:my-3">
              <LoardBoard props={item.shortname} workspaceID={item._id} />

              <div className="bg-base-100 shadow flex justify-center items-center border-black border-2 hover:bg-gray-100 rounded-lg">
                <label
                  htmlFor="my-modal-6"
                  className="hover:cursor-pointer hover:font-bold flex justify-center items-center flax-row gap-2 py-12"
                  onClick={() => {
                    dispatch(setWorkspaceID(item._id));
                  }}
                >
                  <p className="text-sm">Create New Board</p>
                  <FaRegPlusSquare className="mr-1 text-sm"></FaRegPlusSquare>
                </label>
              </div>
            </div>
          </div>
        ))}
        {/*  User as a member workspaces start here  */}
        {membersWorkspace?.map((item) => (
          <div key={item._id} className=" my-5">
            <div className="md:flex items-center justify-between">
              <div className="flex items-center flex-row gap-2">
                <span className="bg-black text-2xl font-bold rounded text-white px-2 pb-1 uppercase">
                  {item?.title?.charAt(0)}
                </span>
                <h2 className="text-xl font-bold text-black">{item?.title}</h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
                <div className="p-0 m-0">
                  <Link
                    onClick={() => {
                      dispatch(setWorkspaceID(item._id));
                    }}
                    to={`/${item.shortname}`}
                    className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-lg font-semibold hover:bg-gray-300 flex items-center"
                  >
                    <FaBoxes className="mr-1 text-sm text-primary"></FaBoxes>{" "}
                    Boards
                  </Link>{" "}
                </div>
                <div>
                  <Link
                    to=""
                    className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-lg font-semibold hover:bg-gray-300 flex items-center"
                  >
                    <HiViewGridAdd className="mr-1 text-sm text-primary"></HiViewGridAdd>{" "}
                    Views
                  </Link>{" "}
                </div>
                <div>
                  <Link
                    onClick={() => {
                      dispatch(setWorkspaceID(item._id));
                    }}
                    to={`/${item.shortname}/members`}
                    className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-lg font-semibold hover:bg-gray-300 flex items-center"
                  >
                    <FaUserFriends className="mr-1 text-sm text-primary"></FaUserFriends>{" "}
                    Members
                  </Link>{" "}
                </div>
                <div>
                  <Link
                    onClick={() => {
                      dispatch(setWorkspaceID(item._id));
                    }}
                    to={`/${item.shortname}/account`}
                    className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-lg font-semibold hover:bg-gray-300 flex items-center"
                  >
                    <FaCogs className="mr-1 text-sm text-primary"></FaCogs>{" "}
                    Settings
                  </Link>{" "}
                </div>
                {/* <div>
                <Link to="" className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-xl font-semibold hover:font-bold hover:bg-gray-300 flex items-center">
                  <FaRegArrowAltCircleUp className="mr-1 text-sm text-primary"></FaRegArrowAltCircleUp> Upgrade
                </Link>{" "}
              </div> */}
              </div>
            </div>
            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 my-5 md:my-3">
              <LoardBoard props={item.shortname} workspaceID={item._id} />

              <div className="bg-base-100 shadow flex justify-center items-center border-black border-2 hover:bg-gray-100 rounded-lg">
                <label
                  htmlFor="my-modal-6"
                  className="hover:cursor-pointer hover:font-bold flex justify-center items-center flax-row gap-2 py-12"
                  onClick={() => {
                    dispatch(setWorkspaceID(item._id));
                  }}
                >
                  <p>Create New Board</p>
                  <FaRegPlusSquare className="mr-1 text-sm"></FaRegPlusSquare>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* **Your Workspace section End here** */}
    </div>
  );
};

export default Board;
