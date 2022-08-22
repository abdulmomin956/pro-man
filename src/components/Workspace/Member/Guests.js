import React from "react";

const Guests = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Guests (0) </h2>
      <p className="text-sm ">
        Guests can only view and edit the boards to which they've been added.
      </p>
      <div>
        <input
          type="text"
          placeholder="Filter by name"
          className="input input-sm rounded-none my-3 input-bordered w-full max-w-xs"
        />
      </div>
      <hr />
      <div>
        <p className=" text-xs italic text-center font-semibold text-gray-500 mt-5">
          There are no guests in this Workspace.
        </p>
      </div>
    </div>
  );
};

export default Guests;
