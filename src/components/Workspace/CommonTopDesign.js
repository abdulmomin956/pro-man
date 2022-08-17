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
              <span className="p-1 font-bold">{currentWorkspace?.title?.charAt(0).toUpperCase()}</span>{" "}
            </button>
          </div>
          {
            !editMood ?
              <div className="pl-3">
                <div className="font-bold text-xl flex items-center">
                  {currentWorkspace?.title}{" "}
                  <button className="" onClick={() => setEditMood(true)}><MdOutlineModeEditOutline className="ml-2"></MdOutlineModeEditOutline></button>
                </div>
                <div className="flex items-center">
                  <MdOutlineLock></MdOutlineLock>
                  <p> Private</p>
                </div>
              </div> :
              <div className="pl-3">
                <label className="label" htmlFor="name">Name</label>
                <input type="text" className="input input-bordered w-full max-w-xs" value={currentWorkspace?.title} />
                <label className="label" htmlFor="name">Workspace type</label>
                <select type="text" className="input input-bordered w-full max-w-xs" defaultValue={currentWorkspace?.type}>
                  <option>Small Business</option>
                  <option>Education</option>
                  <option>Marketing</option>
                  <option>Human Resources</option>
                  <option>Engineering-IT</option>
                  <option>Operation</option>
                  <option>Others</option>
                </select>
                <label className="label" htmlFor="name">Short name</label>
                <input defaultValue={currentWorkspace?.shortname} type="text" className="input input-bordered w-full max-w-xs" />
                <label className="label" htmlFor="name">Website (optional)</label>
                <input defaultValue={currentWorkspace?.website} type="text" className="input input-bordered w-full max-w-xs" />
                <label className="label" htmlFor="name">Description (optional)</label>
                <textarea defaultValue={currentWorkspace?.description} type="text" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-primary mr-2" type="submit">Save</button>
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