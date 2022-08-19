import React from "react";
import bg1 from "./../../assest/image/bg1.jpg";
import './Notification.css'

const Notification = () => {




  return (
    <div>

      <input type="checkbox" id="notification" className="modal-toggle" />

      <label htmlFor="notification" className="modal">
        <label className="modal-box right-2 absolute top-16">
          <div className="flex items-center justify-center">
            {/* modal header............. */}
            <label
              htmlFor="notification"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg text-center mb-1">Notification</h3>
          </div>
          <hr className="h-3" />
          {/* modal body............. */}
          <div className="flex space-between">
            <a href="#" className="underline">
              Filter by unread
            </a>
            <a href="#" className=" ml-auto underline">
              Mark as all read
            </a>
          </div>
          <div className="notification-items mt-5 flex gap-3">
            <input type="checkbox" className="checkbox checkbox-sm" />
            <div className="w-full border">
              <div className=" bg-gray-100">
                <div className="flex border-b-2 w-full items-center bg-white mb-5 py-3 pl-3">
                  <img src={bg1} alt="" className="w-[50px] mr-3" />
                  <p className="text-lg">Pro-man</p>
                </div>
                <div className="flex items-center pl-3">
                  <span className="bg-green-600 text-white rounded-[50px] p-1 mr-3">AM</span>
                  <h2 className="text-lg font-bold">Abdul hoi Momin</h2>
                </div>
                <p className="pl-3">Made you as admin on the board <strong className="underline">Pro-man</strong>  Jul 21 at 10.5 PM</p>
              </div>
            </div>
          </div>
          <div></div>
        </label>
      </label>
    </div>
  );
};

export default Notification;
