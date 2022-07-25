import React from "react";

const Workspace = () => {
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-top sm:modal-middle">
        <div class="modal-box">
          <div>
            <h3 class="font-bold text-lg">Let's build a Workspace</h3>
            <p class="py-4 text-gray-500">
              Boost your productivity by making it easier for everyone to access
              boards in one location.
            </p>
            <div class="form-control w-full max-w-xs mb-4">
              <label class="label">
                <span class="text-sm font-bold">Workspace name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                <span class="label-text-alt">
                  This is the name of your company, team or organization.
                </span>
              </label>
            </div>

            <div>
              <p className="text-sm font-bold">Workspace type</p>
              <select class="select select-bordered select-sm w-full max-w-xs mt-2">
                <option disabled selected>
                  Education
                </option>
                <option>Small Business</option>
                <option>Marketing</option>
                <option>Human Resources</option>
                <option>Engineering-IT</option>
                <option>Operation</option>
                <option>Others</option>
              </select>
            </div>

            <div class="form-control w-full max-w-xs mt-4">
              <label class="label">
                <p class="text-sm font-bold">
                  Workspace description{" "}
                  <span className="text-gray-400 font-normal">Optional</span>{" "}
                </p>
              </label>
              <textarea
                class="textarea textarea-bordered h-24"
                placeholder="Our team organizes everything here"
              ></textarea>
              <label class="label">
                <span class="label-text-alt">
                  Get your members on board with a few words about your
                  Workspace.
                </span>
              </label>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <button className="btn">Continue</button>
              </div>
              <div class="modal-action">
                <label for="my-modal-6" class="btn">
                  Cancel
                </label>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
