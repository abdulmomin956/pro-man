import React from "react";
import "./BordModal.css";

const BoardModal = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
        <label class="label">
              <span class="label-text">board name</span>
            </label>
        <input type="text" placeholder="Type here" class="input w-full " />
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Workspace</span>
            </label>
            <select class="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>Doctor portal</option>
              <option>Trallo managmant</option>
              
            </select>
            <label class="label">
              <span class="label-text">Validaty</span>
            </label>
            <select class="select select-bordered">
           
              <option selected>Private</option>
              <option>Public</option>
              <option>Workspace</option>
              
            </select>
            
          </div>
          <div class="modal-action">
            <label for="my-modal-6" class="btn">
              create
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardModal;
