import React, { useState } from "react";
import "./Workspace.css";
import { FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.init";
import { useQuery } from "react-query";
import Loading from "../shared/Loading";
import axios from "axios";

const Workspace = () => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [user] = useAuthState(auth);
  const email = user.email;
  // console.log(user);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // const {
  //   isLoading,
  //   data: users,
  //   refetch,
  // } = useQuery("users", () =>
  //   fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
  //     res.json()
  //   )
  // );

  const { isLoading, data, refetch } = useQuery("data", () => fetch("https://morning-coast-54182.herokuapp.com/workspace/:email").then((res) => res.json()))

  if (isLoading) {
    <Loading></Loading>;
  }

  console.log(data);

  let workspace = []; //[null]
  const workspaceJson = localStorage.getItem("workspace");
  if (JSON.parse(workspaceJson)) {
    workspace = JSON.parse(workspaceJson);
  }

  const onSubmit = async (data) => {
    const { description, workspaceType } = data;

    const newWorkspace = {
      title: workspaceName,
      type: workspaceType,
      email: email,
      description: description,
    };

    // console.log(newWorkspace);
    const res = await axios.post('https://morning-coast-54182.herokuapp.com/workspace', newWorkspace)
    console.log(res)


    // workspace.push(newWorkspace);
    // localStorage.setItem("workspace", JSON.stringify(workspace));
    // setWorkspaceName("");
    // reset();
  };

  let nameError;
  if (!workspaceName) {
    nameError = (
      <p className="text-red-500 text-xs m-0 pt-2 italic">
        {" "}
        Workspace Name is Required
      </p>
    );
  }

  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-sa6" className="modal-toggle" />
      <div className="modal modal-top sm:modal-middle">
        <div className="workspace-modal w-10/12 sm:w-8/12 md:w-10/12 ">
          <div className="flex flex-row-reverse w-full">
            <button className="fixed">
              <label htmlFor="my-modal-sa6" className="">
                <FaTimes className="text-xl hover:cursor-pointer"></FaTimes>
              </label>
            </button>{" "}
          </div>
          <div className="md:flex md:flex-row-reverse child-overflow ">
            <div className="md:w-2/4 flex content-center items-center px-4">
              <img
                src="https://img.freepik.com/free-vector/project-management-business-process-planning-workflow-organization-colleagues-working-together-teamwork_335657-2469.jpg?w=2000"
                alt="illustration"
              />
            </div>

            <div className="md:w-2/4 p-2">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="wordspace-form-card"
              >
                <h3 className="font-bold text-lg workspace-modal-title">
                  Let's build a Workspace
                </h3>
                <p className="py-4 text-gray-500">
                  Boost your productivity by making it easier for everyone to
                  access boards in one location.
                </p>
                <div className="form-control w-full max-w-xs mb-4">
                  <label className="label">
                    <span className="text-sm font-bold workspace-modal-title">
                      Workspace name
                    </span>
                  </label>

                  <input
                    type="text"
                    placeholder="Type Your Name"
                    required
                    onChange={(e) => {
                      setWorkspaceName(e.target.value);
                    }}
                    className="input input-bordered w-full max-w-xs"
                  />
                  {nameError}
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                  <label className="label">
                    <span className="label-text-alt">
                      This is the name of your company, team or organization.
                    </span>
                  </label>
                </div>

                <div>
                  <p className="text-sm font-bold workspace-modal-title">
                    Workspace type
                  </p>
                  <select
                    placeholder="Type Your Name"
                    className="select select-bordered select-sm w-full max-w-xs mt-2"
                    {...register("workspaceType", {
                      required: {
                        value: true,
                        message: "Workspace Type Required",
                      },
                    })}
                  >
                    {/* <option disabled selected></option> */}
                    <option>Small Business</option>
                    <option>Education</option>
                    <option>Marketing</option>
                    <option>Human Resources</option>
                    <option>Engineering-IT</option>
                    <option>Operation</option>
                    <option>Others</option>
                  </select>
                  <label className="label">
                    {errors.workspaceType?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.workspaceType.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control w-full max-w-xs mt-4">
                  <label className="label">
                    <p className="text-sm font-bold workspace-modal-title">
                      Workspace description{" "}
                      <span className="text-gray-400 font-normal">
                        Optional
                      </span>{" "}
                    </p>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-24"
                    placeholder="Our team organizes everything here"
                    {...register("description")}
                  ></textarea>
                  <label className="label">
                    <span className="label-text-alt">
                      Get your members on board with a few words about your
                      Workspace.
                    </span>
                  </label>
                </div>

                <div className="flex justify-center my-5">
                  {workspaceName ? (
                    <div className="w-4/5">
                      <button
                        type="submit"
                        className="w-full cursor-pointer p-2 pl-5 pr-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-lg rounded-lg focus:border-4 border-indigo-300"
                      >
                        <label
                          htmlFor="my-modal-sa6"
                          className="w-full cursor-pointer p-2 pl-5 pr-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-lg rounded-lg focus:border-4 border-indigo-300"
                        >
                          Continue
                        </label>
                      </button>
                    </div>
                  ) : (
                    <div className="w-4/5">
                      <button
                        type="submit"
                        className="w-full p-2 pl-5 pr-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-lg rounded-lg focus:border-4 border-indigo-300"
                      >
                        Continue
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
