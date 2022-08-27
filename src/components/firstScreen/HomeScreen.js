import React from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { useSelector } from "react-redux";
import img from "../../images/uptodate.png";
import HomeScreenAllBoards from "./HomeScreenAllBoards";

const HomeScreen = () => {
  const data = useSelector(state => state.workspace)
  // const currentWorkspace = workspaces.filter(workspaces => workspaces.shortname)
  // console.log(currentWorkspace)


  return (
    <div className="md:flex justify-between my-10 shadow-sm">
      <div className="md:w-12/6 lg:w-full flex justify-center">
        <div className="card md:w-full bg-base-100 shadow">
          <figure>
            <img src={img} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h1 className="text-2xl text-center">
              Stay on track and up to date
            </h1>
            <p>
              Invite people to boards and cards, leave comments, add due dates,
              and we'll show the most important activity here.
            </p>
          </div>
        </div>
      </div>
      <div className="ml-10 mt-10 md:mt-0 sm:w-6/12  md:w-[20rem] shadow rounded-lg w-">
        <div className="p-2 ">
          <p className=" mb-2 ">Recently viewed</p>
          {
            data.map(item => (
              <div className="" key={item._id}>
                <HomeScreenAllBoards props={item.shortname} workspaceID={item._id} />
              </div>
            ))
          }
          <div className="ustify-start my-4 ">
            <p>Links</p>
            <label
              htmlFor="my-modal-6"
              className="flex items-center  py-1 myButton cursor-pointer rounded-lg"
              style={{ borderRadius: "0px" }}
            >

              <FaRegPlusSquare className="mr-2"></FaRegPlusSquare>
              Create a board
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
