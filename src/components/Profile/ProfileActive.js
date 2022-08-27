import React from "react";

const ProfileActive = () => {
  return (
    <div>
      <div className="">
        <div className="activeWorkSpace">
          <h2 className="ActivityHeader">Workspaces</h2>

          <div className="WorkspacesItems">
            <h2 className="WorkspacesItem">Doctor portal</h2>
            <h2 className="WorkspacesItem">Doctor portal</h2>
          </div>
        </div>
        <div className="activatyHistry">
          <h2 className="ActivityHeader">Activity</h2>
          <ul>
            <li className=" flex items-center">
              <div className="avatar p-5">
                <div className="w-7 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img alt="" src='https://i.ibb.co/Pwc30QZ/images-1.png' />
                </div>
              </div>
              <div>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileActive;
