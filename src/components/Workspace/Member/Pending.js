import React from "react";

const Pending = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Pending (0) </h2>
      <p className="text-sm ">
        These people have requested to join this Workspace. All Workspace
        members are admins and can edit Workspace settings.
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
          There are no pending requests.
        </p>
      </div>
    </div>
  );
};

export default Pending;
