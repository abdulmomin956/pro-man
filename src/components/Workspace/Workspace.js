import React from "react";
import "./Workspace.css";
import { FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Workspace = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let workspace = [];//[null]
  const workspaceJson = localStorage.getItem('workspace')
  if (JSON.parse(workspaceJson)) {
    console.log('true');
    workspace = JSON.parse(workspaceJson)
  }


  const onSubmit = (data) => {
    const { name, description, workspaceType } = data;
    // console.log(data);
    const newWorkspace = {
      title: name,
      type: workspaceType,
      description: description,
    }
    workspace.push(newWorkspace)
    console.log(workspace);
    localStorage.setItem('workspace', JSON.stringify(workspace),)
  };

  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-sa6" class="modal-toggle" />
      <div class="modal modal-top sm:modal-middle">
        <div className="workspace-modal lg:w-10/12 ">
          <div className="flex flex-row-reverse w-full">
            <button className="fixed">
              <label for="my-modal-sa6" class="">
                <FaTimes className="text-xl hover:cursor-pointer"></FaTimes>
              </label>
            </button>{" "}
          </div>
          <div class="md:flex md:flex-row-reverse child-overflow ">
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
                <h3 class="font-bold text-lg workspace-modal-title">
                  Let's build a Workspace
                </h3>
                <p class="py-4 text-gray-500">
                  Boost your productivity by making it easier for everyone to
                  access boards in one location.
                </p>
                <div class="form-control w-full max-w-xs mb-4">
                  <label class="label">
                    <span class="text-sm font-bold workspace-modal-title">
                      Workspace name
                    </span>
                  </label>

                  <input
                    type="text"
                    placeholder="Type Your Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "First Name is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                  <label class="label">
                    <span class="label-text-alt">
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
                    class="select select-bordered select-sm w-full max-w-xs mt-2"
                    {...register("workspaceType", {
                      required: {
                        value: true,
                        message: "Workspace Type Required",
                      },
                    })}
                  >
                    <option disabled selected></option>
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

                <div class="form-control w-full max-w-xs mt-4">
                  <label class="label">
                    <p class="text-sm font-bold workspace-modal-title">
                      Workspace description{" "}
                      <span className="text-gray-400 font-normal">
                        Optional
                      </span>{" "}
                    </p>
                  </label>
                  <textarea
                    class="textarea textarea-bordered h-24"
                    placeholder="Our team organizes everything here"
                    // name="workspaceDescription"
                    // required
                    {...register("description", {
                      required: {
                        value: true,
                        message: "Description Required",
                      },
                    })}
                  ></textarea>
                  <label className="label">
                    {errors.description?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.description.message}
                      </span>
                    )}
                  </label>
                  <label class="label">
                    <span class="label-text-alt">
                      Get your members on board with a few words about your
                      Workspace.
                    </span>
                  </label>
                </div>

                <div className="flex justify-center ">
                  <div className="w-2/3">
                    <button type="submit" className="btn w-full">
                      Continue
                    </button>
                  </div>
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
