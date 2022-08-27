import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.init";
import Loading from "./Loading";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import axios from "axios";

const InviteMemberModal = ({ workspaceId }) => {
  const [matchField, setMatchField] = useState("");
  const [users, setUsers] = useState([]);
  const [selectMember, setSelectMember] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [userInfoToken, setUserInfoToken] = useState("")

  const form = useRef();

  useEffect(() => {
    fetch(`https://morning-coast-54182.herokuapp.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    if (selectMember) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }, [selectMember]);
  // console.log(selectMember);

  if (loading) {
    return <Loading></Loading>;
  }

  // const { fromEmail, displayName } = user?.email;

  const handleModalSubmit = (event) => {
    event.preventDefault();
    let message = event.target.message.value;
    const url = `http://localhost:3000/invite/${workspaceId}/${selectMember}/${userInfoToken}`
    // console.log(url);
    form.current.user_email.value = selectMember;
    form.current.message.value = url;

    emailjs
      .sendForm(
        "service_lvaziz1",
        "template_jwbokis",
        form.current,
        "iLv2oS5yxqCVzHgPL"
      )
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          setSelectMember("");
          setMatchField("");
          message = "";
          form.current.user_email.value = "";
          toast("Email send successfully.", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  const handleSelectEmail = async (user) => {
    setSelectMember(user.email);
    const userData = {
      email: selectMember,
      workspaceId: workspaceId
    }
    // console.log(userData);
    await axios.post("http://localhost:5000/invite", userData)
      .then(res => {
        if (res.status === 200) {
          setUserInfoToken(res.data.token);
        }
      })

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
                  onClick={() => {
                    setSelectMember("");
                    setMatchField("");
                  }}
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold text-center mb-1">
                  Invite to Workspace{" "}
                </h3>
              </div>
              <hr></hr>

              <form ref={form} onSubmit={handleModalSubmit}>
                <div className="mt-4 mb-2 flex justify-between items-center">
                  <input type="text" name="woner_email" value={user?.email} id="" className=" hidden" />
                  <input
                    type="text"
                    name="woner_name"
                    value={user?.displayName}
                    id=""
                    className=" hidden"
                  />
                  {selectMember && (
                    <p className="text-blue-600 border px-5 py-1 w-full">
                      {selectMember}
                    </p>
                  )}
                  <input
                    onKeyUp={(e) => {
                      setMatchField(e.target.value);
                    }}
                    type="text"
                    name="user_email"
                    placeholder={`Enter email address`}
                    required
                    className={`input input-sm input-bordered w-full  rounded-none ${selectMember && "hidden"
                      }`}
                  />
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
                    className={`textarea w-full textarea-bordered ${selectMember ? "block" : "hidden"
                      }`}
                    placeholder="Bio"
                    name="message"
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
    </div>
  );
};

export default InviteMemberModal;
