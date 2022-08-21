import React from "react";

const InviteMemberModal = () => {
  return (
    <div>
      <div>
        <div className="mx-auto w-2/12">
          <input type="checkbox" id="inviteMember" className="modal-toggle" />
          <label htmlFor="inviteMember" className="modal cursor-pointer">
            <label
              className="modal-box relative mx-10 md:deleteModal"
              id="sidebarOverflow"
              htmlFor=""
              style={{ height: "auto", maxWidth: "600px" }}
            >
              <div className="flex items-center justify-center">
                <label
                  htmlFor="inviteMember"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg text-center mb-1">
                  Invite to Workspace{" "}
                </h3>
              </div>
              <hr></hr>

              <div className="mt-4 mb-2 flex justify-between items-center">
                <input
                  //   onKeyUp={(e) => setMatchField(e.target.value)}
                  type="text"
                  placeholder="Enter email address"
                  className="input input-sm input-bordered w-full  rounded-none"
                />
                <button
                  // onClick={}
                  // disabled={!......}
                  className="btn btn-sm btn-outline ml-3 rounded-none"
                >
                  Send Invite
                </button>
              </div>
              <div>
                <textarea
                  class="textarea w-full textarea-bordered"
                  placeholder="Bio"
                ></textarea>
              </div>
            </label>
          </label>
        </div>
      </div>
    </div>
  );
};

export default InviteMemberModal;
