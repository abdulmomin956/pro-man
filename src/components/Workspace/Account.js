import React from "react";
import { MdOutlineModeEditOutline, MdOutlineLock,MdPersonAddAlt1 } from "react-icons/md";
import "./Account.css";

const Account = () => {
  return (
    <div style={{ width: "100%" }} className="mx-16 my-10">
      <div className="flex justify-between mx-5">
        <div className="flex items-start">
          <div>
            <button className="aSeetingIcon">
              <span className="py-2">W</span>{" "}
            </button>
          </div>
          <div className="pl-3">
            <div className="font-bold text-xl flex items-center">
              Trello Workspace{" "}
              <button className=""><MdOutlineModeEditOutline className="ml-2"></MdOutlineModeEditOutline></button>
            </div>
            <div className="flex items-center">
              <MdOutlineLock></MdOutlineLock>
              <p> Private</p>
            </div>
          </div>
        </div>
        <div>
          <button className="button-27 ">
            <p className="flex items-center">
            <MdPersonAddAlt1 className="mr-2"></MdPersonAddAlt1>
            Invite Workspace Members
            </p>
          </button>
        </div>
      </div>
      <div className="accountUnderline"></div>
    </div>
  );
};

export default Account;
