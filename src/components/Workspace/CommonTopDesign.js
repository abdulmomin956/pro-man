import React from "react";
import { useState } from "react";
import { MdOutlineModeEditOutline, MdOutlineLock, MdPersonAddAlt1 } from "react-icons/md";
import { useSelector } from "react-redux";
import "./Account.css";

const CommonTopDesign = () => {
  const [editMood, setEditMood] = useState(false)
  const currentWorkspace = useSelector(state => state.currentWorkspace)
  return (
    <div className="md:mx-16  my-10">
      <div className="md:flex justify-between items-start mx-5">
        <div className="flex items-start ">
          <div>
            <button className="bg-primary text-white p-2 rounded text-4xl">
              <span className="p-1 font-bold">{currentWorkspace.charAt(0).toUpperCase()}</span>{" "}
            </button>
          </div>
          {
            !editMood ?
              <div className="pl-3">
                <div className="font-bold text-xl flex items-center">
                  {currentWorkspace}{" "}
                  <button className="" onClick={() => setEditMood(true)}><MdOutlineModeEditOutline className="ml-2"></MdOutlineModeEditOutline></button>
                </div>
                <div className="flex items-center">
                  <MdOutlineLock></MdOutlineLock>
                  <p> Private</p>
                </div>
              </div> :
              <div className="pl-3">
                <label className="label" htmlFor="name">Name</label>
                <input type="text" className="input input-bordered w-full max-w-xs" value={currentWorkspace} />
                <label className="label" htmlFor="name">Workspace type</label>
                <input type="text" className="input input-bordered w-full max-w-xs" />
                <label className="label" htmlFor="name">Short name</label>
                <input type="text" className="input input-bordered w-full max-w-xs" />
                <label className="label" htmlFor="name">Website (optional)</label>
                <input type="text" className="input input-bordered w-full max-w-xs" />
                <label className="label" htmlFor="name">Description (optional)</label>
                <textarea type="text" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-primary" type="submit">Save</button>
                <button className="btn" type="cancel" onClick={() => setEditMood(false)}>Cancel</button>
              </div>
          }
        </div>
        <div>
          <button className="btn btn-primary text-white">
            <p className="flex items-center">
              <MdPersonAddAlt1 className="mr-2"></MdPersonAddAlt1>
              Invite Workspace Members
            </p>
          </button>
        </div>
      </div>
      <div className="accountUnderline"></div>
    </div>
  );
};

export default CommonTopDesign;