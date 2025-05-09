import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.init";
import Loading from "./Loading";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import axios from "axios";
import { RESTAPI } from "../../api";

const InviteMemberModal = ({ workspaceId }) => {
  const [matchField, setMatchField] = useState("");
  const [users, setUsers] = useState([]);
  const [selectMember, setSelectMember] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [userInfoToken, setUserInfoToken] = useState("");

  const form = useRef();

  useEffect(() => {
    fetch(`${RESTAPI}users/all`)
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

  useEffect(() => {
    if (selectMember) {
      const userData = {
        email: selectMember,
        workspaceId: workspaceId
      }
      axios.post(RESTAPI + "invite/token", userData)
        .then(res => {
          if (res.status === 200) {
            setUserInfoToken(res.data.token);
            // console.log(res.data.token);
          }
        })
    }
  }, [selectMember, workspaceId]);

  if (loading) {
    return <Loading></Loading>;
  }

  const handleModalSubmit = (event) => {
    event.preventDefault();
    let message = event.target.message.value;
    const url = `https://pro-man.netlify.app/invite/${workspaceId}/${selectMember}/${userInfoToken}`;
    // console.log(url);
    form.current.user_email.value = selectMember;
    form.current.message.value = url;

    emailjs
      .sendForm(
        "service_jf011pm",
        "template_e814g7k",
        form.current,
        "7UHd1JsNtmzGFUsnP"
      )
      .then((res) => {
        console.log(res);
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
                  <input
                    type="text"
                    name="woner_email"
                    defaultValue={user?.email}
                    id=""
                    className=" hidden"
                  />
                  <input
                    type="text"
                    name="woner_name"
                    defaultValue={user?.displayName}
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
                    autoComplete="off"
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
                    className=" hidden"
                    // className={`textarea w-full textarea-bordered ${selectMember ? "block" : "hidden"}`}
                    placeholder="Bio"
                    name="message"
                  ></textarea>
                </div>
                <div className={`${selectMember && "hidden"}`}>
                  {users?.filter((user) => {
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
