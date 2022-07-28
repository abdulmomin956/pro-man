import React from "react";
import { FaTimes } from "react-icons/fa";
import "./BordModal.css";

const BoardModal = () => {

  const handleSubmit = event => {
    event.preventDefault();
  }
  return (
    // <div>
    //   <input type="checkbox" id="my-modal-6" class="modal-toggle" />
    //   <div class="modal modal-bottom sm:modal-middle">
    //     <div class="modal-box">
    //       {/* <label class="label">
    //         <span class="label-text">board name</span>
    //       </label> */}
    //       <input type="text" placeholder="Type here" class="input w-full " />
    //       <button className="fixed">
    //         <label for="my-modal-6" class="">
    //           <FaTimes className="text-xl hover:cursor-pointer"></FaTimes>
    //         </label>
    //       </button>{" "}
    //       <div class="form-control w-full ">
    //         <label class="label">
    //           <span class="label-text">Workspace</span>
    //         </label>
    //         <select class="select select-bordered">
    //           <option disabled selected>
    //             Pick one
    //           </option>
    //           <option>Doctor portal</option>
    //           <option>Trallo managmant</option>

    //         </select>
    //         <label class="label">
    //           <span class="label-text">Validaty</span>
    //         </label>
    //         <select class="select select-bordered">

    //           <option selected>Private</option>
    //           <option>Public</option>
    //           <option>Workspace</option>

    //         </select>

    //       </div>
    //       <div class="modal-action">
    //         <label for="my-modal-6" class="btn">
    //           create
    //         </label>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-top sm:modal-middle">
        <div className="workspace-modal lg:w-1/3">
          <div className="flex flex-row-reverse w-full">
            <button className="fixed">
              <label for="my-modal-6" class="">
                <FaTimes className="text-xl hover:cursor-pointer"></FaTimes>
              </label>
            </button>{" "}
          </div>

          <form onSubmit={handleSubmit} className="wordspace-form-card mt-20">
            <h3 class="font-bold text-lg board-modal-title text-center">
              Create Board
            </h3>
            <div class="form-control w-full max-w-xs mb-4">
              <label class="label">
                <span class="text-sm font-bold board-modal-title">
                  Board Title
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="name"
                required
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                <span class="label-text-alt">
                  Board title is required.
                </span>
              </label>
            </div>

            <div>
              <p className="text-sm font-bold board-modal-title">
                Visibility
              </p>
              <select class="select select-bordered select-sm w-full max-w-xs mt-2">

                <option>Privete</option>
                <option selected>
                  <h4>Workspace</h4>
                  {/* <p>All members of the Pro-man</p> */}
                </option>
                <option>Public</option>

              </select>
            </div>

            <div class="modal-action my-6">
              <label for="my-modal-6" class="btn bg-black text-white w-full">
                create
              </label>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

export default BoardModal;

