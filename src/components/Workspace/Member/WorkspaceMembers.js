import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import Loading from "../../shared/Loading";
import { FaLink } from "react-icons/fa";
import { MdCancelPresentation } from "react-icons/md";

const WorkspaceMembers = () => {
  const [user, loading] = useAuthState(auth);
  const { wMember, setWmember } = useState(0);
  if (loading) {
    return <Loading></Loading>;
  }
  const name = user.displayName;
  console.log(name);

  const x = name;
  const nameparts = x?.split(" ");
  const initials =
    nameparts[0].charAt(0).toUpperCase() + nameparts[1].charAt(0).toUpperCase();

  return (
    <div>
      <h2 className="text-xl font-semibold">Workspace members {wMember} </h2>
      <p className="text-sm mb-4">
        Workspace members can view and join all Workspace visible boards and
        create new boards in the Workspace.
      </p>
      <hr />
      <div className="flex mb-4">
        <div className="w-8/12">
          <p className="text-xl font-semibold mt-5 mb-2">
            Invite members to join you
          </p>
          <p className="text-sm">
            Anyone with a unique link can join this Workspace, with 1 board.
            You’ll be billed for each member added. You can disable, and create
            a new link for this Workspace at any time.
          </p>
        </div>
        <div className="w-4/12 flex justify-center items-center">
          <button className="btn btn-sm rounded-none">
            <FaLink className="mr-1"></FaLink> Invite with link
          </button>
        </div>
      </div>
      <hr></hr>
      <div>
        <input
          type="text"
          placeholder="Filter by name"
          class="input input-sm rounded-none my-5 input-bordered w-full max-w-xs"
        />
      </div>
      {/* Member list start here */}
      <div className="pb-5">
        <hr />
        <div className="flex justify-between my-2">
          <div className="flex">
            <div>
              <button className="btn btn-circle font-bold text-xl">
                {initials}{" "}
              </button>
            </div>
            <div className="ml-3">
              <p className="font-bold mb-0">{name}</p>
              <p className="text-sm">{user.email} </p>
            </div>
          </div>
          <div className="flex items-center">
            <button className="btn btn-sm rounded-none font-bold">
              <MdCancelPresentation className="mr-1 font-bold"></MdCancelPresentation>{" "}
              Leave
            </button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default WorkspaceMembers;
