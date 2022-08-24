import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const InviteMemberModal = () => {
  const [matchField, setMatchField] = useState("");
  const [users, setUsers] = useState([]);
  const [selectMember, setSelectMember] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);

  useEffect(() => {
    fetch(`https://morning-coast-54182.herokuapp.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // console.log(users)
  useEffect(() => {
    if (selectMember) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }, [selectMember]);
  // console.log(users[5]?.email);
  // console.log(selectMember);

  const handleModalSubmit = (event) => {
    event.preventDefault();
    let textArea = event.target.textArea.value;
    console.log("Modal is submit......", textArea);
    setSelectMember("");
    setMatchField("");
    textArea = "";
  };
  const handleSelectEmail = (user) => {
    setSelectMember(user.email);
  };

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
                <h3 className="text-lg font-bold text-center mb-1">
                  Invite to Workspace{" "}
                </h3>
              </div>
              <hr></hr>

              <form onSubmit={handleModalSubmit}>
                <div className="mt-4 mb-2 flex justify-between items-center">
                  {selectMember ? (
                    <p className="text-blue-600 border px-5 py-1 w-full">
                      {selectMember}{" "}
                    </p>
                  ) : (
                    <input
                      onKeyUp={(e) => {
                        setMatchField(e.target.value);
                      }}
                      type="text"
                      name="email"
                      placeholder={`Enter email address`}
                      className="input input-sm input-bordered w-full  rounded-none"
                    />
                  )}
                  <button
                    disabled={btnDisable}
                    type="submit"
                    className="btn btn-sm btn-outline ml-3 rounded-none"
                  >
                    Send Invite
                  </button>
                </div>                
                <div>
                  <textarea
                    className={`textarea w-full textarea-bordered ${
                      selectMember ? "block" : "hidden"
                    }`}
                    placeholder="Bio"
                    name="textArea"
                  ></textarea>
                </div>
                <div className={`${selectMember && "hidden"}`}>
                {users
                  ?.filter((user) => {
                    if (matchField === "") {
                      return;
                    } else if (
                      user.email
                        ?.toLowerCase()
                        .includes(matchField?.toLocaleLowerCase())
                    ) {
                      // console.log(user)
                      return user;
                    }
                  })
                  ?.map((user, index) => {
                    return (
                      <p key={index} onClick={() => handleSelectEmail(user)}>
                        {" "}
                        {user.email}{" "}
                      </p>
                    );
                  })}
                </div>
              </form>
            </label>
          </label>
        </div>
      </div>
      Testing gitHub contribution
    </div>
  );
};

export default InviteMemberModal;
