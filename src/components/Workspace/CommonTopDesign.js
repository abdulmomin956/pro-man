import React from "react";
import { useState } from "react";
import { MdOutlineModeEditOutline, MdOutlineLock, MdPersonAddAlt1 } from "react-icons/md";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Account.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const CommonTopDesign = () => {
  const [editMood, setEditMood] = useState(false)
  const { shortname } = useParams();
  const workspaces = useSelector(state => state.workspace)
  const currentWorkspace = workspaces.filter(workspaces => workspaces.shortname === shortname)


  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { newShortname, title, type, website, description } = data;
    if (newShortname === shortname) {
      const newData = { title, type, website, description }
      const res = await axios.patch(`https://morning-coast-54182.herokuapp.com/sworkspace/api/${currentWorkspace[0]._id}`, newData)
      console.log(res);
    }
    else {
      const res = await axios.patch(`https://morning-coast-54182.herokuapp.com/sworkspace/api/${currentWorkspace[0]._id}`, data)
      console.log(res);
    }
  }

  return (
    <div className="md:mx-16  my-10">
      <div className="md:flex justify-between items-start mx-5">
        <div className="flex items-start ">
          <div>
            <button className="bg-primary text-white p-2 rounded text-4xl">
              <span className="p-1 font-bold">{currentWorkspace[0]?.title?.charAt(0).toUpperCase()}</span>{" "}
            </button>
          </div>
          {
            !editMood ?
              <div className="pl-3">
                <div className="font-bold text-xl flex items-center">
                  {currentWorkspace[0]?.title}{" "}
                  <button className="" onClick={() => setEditMood(true)}><MdOutlineModeEditOutline className="ml-2"></MdOutlineModeEditOutline></button>
                </div>
                <div className="flex items-center">
                  <MdOutlineLock></MdOutlineLock>
                  <p> Private</p>
                </div>
              </div> :
              <form onSubmit={handleSubmit(onSubmit)} className="pl-3">
                <label className="label" htmlFor="name">Name</label>
                <input {...register("title")} type="text" className="input input-bordered w-full max-w-xs" value={currentWorkspace[0]?.title} />
                <label className="label" htmlFor="name">Workspace type</label>
                <select {...register("type")} type="text" className="input input-bordered w-full max-w-xs" defaultValue={currentWorkspace[0]?.type}>
                  <option>Small Business</option>
                  <option>Education</option>
                  <option>Marketing</option>
                  <option>Human Resources</option>
                  <option>Engineering-IT</option>
                  <option>Operation</option>
                  <option>Others</option>
                </select>
                <label className="label" htmlFor="name">Short name</label>
                <input {...register("newShortname")} defaultValue={currentWorkspace[0]?.shortname} type="text" className="input input-bordered w-full max-w-xs" />
                <label className="label" htmlFor="name">Website (optional)</label>
                <input {...register("website")} defaultValue={currentWorkspace[0]?.website} type="text" className="input input-bordered w-full max-w-xs" />
                <label className="label" htmlFor="name">Description (optional)</label>
                <textarea {...register("description")} defaultValue={currentWorkspace[0]?.description} type="text" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-primary mr-2" type="submit">Save</button>
                <button className="btn" type="cancel" onClick={() => setEditMood(false)}>Cancel</button>
              </form>
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