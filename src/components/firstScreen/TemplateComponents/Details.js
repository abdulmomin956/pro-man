import React from "react";
import { useState } from "react";
import TempleteBoardModal from "../../shared/TempleteBoardModal";
import TemplateCreateSection from "./TemplateCreateSection";
import "../../Sidebar/Sidebar.css";

const Details = ({ item }) => {
  const [openModal, setOpenModel] = useState(false);

  const handleUseTemplate = () => {
    setOpenModel(!openModal);
  };

  const {
    bg,
    profilePic,
    title,
    creator,
    about,
    details,
    powerUp,
    used,
    views,
  } = item;
  return (
    <div className="mx-5 my-12">
      <section className="flex flex-col md:flex-row justify-between items-center my-4">
        <div className="flex items-center flex-row gap-3">
          <img
            className="w-[75px] rounded-full border-[3px] border-white"
            src={profilePic}
            alt=""
          />
          <div>
            <p className=" font-semibold text-2xl">{title}</p>
            <p className="text-sm">{creator}</p>
            <div className="flex items-center flex-row gap-5 mt-2 mx-2">
              <div className="flex items-center flex-row gap-1">
                <img className="w-[17px]" src="/Images/icons/copy.svg" alt="" />
                <p className="text-xs">{used}</p>
              </div>

              <div className="flex items-center flex-row gap-1">
                <img className="w-[17px]" src="/Images/icons/eye.svg" alt="" />
                <p className="text-xs">{views}</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row justify-center items-center gap-4 my-4">
          <button className="px-3 py-2 w-[80vw] md:w-auto bg-slate-200 hover:bg-slate-300 text-sm rounded-sm">
            Share
          </button>
          <label
            onClick={handleUseTemplate}
            htmlFor="useTemplate"
            className="modal-button px-3 py-2 w-[80vw] text-center md:w-auto bg-cyan-500 text-sm rounded-sm text-white hover:bg-cyan-600"
          >
            Use Template
          </label>
        </div>
      </section>
      <section>
        <div className="my-4 text-sm">
          <p className=" text-lg font-semibold my-2">About this template</p>
          <p>{about}</p>
          <p>{details}</p>
        </div>
        <div>
          <p className=" text-lg font-semibold mt-2 mb-12">Background Image</p>
          <img className="w-[640px] mx-auto rounded-lg" src={bg} alt="" />
        </div>
      </section>
      <section className="my-12">
        <div className="flex items-center flex-row gap-2 my-2">
          <img className="w-[17px]" src="/Images/icons/copy.svg" alt="" />
          <p className="text-lg font-semibold">Power-Ups</p>
        </div>
        <div>
          <p className="text-sm">{powerUp}</p>
        </div>
      </section>
      <TemplateCreateSection></TemplateCreateSection>
      {openModal && (
        <div>
          <input type="checkbox" id="useTemplate" className="modal-toggle" />

          <div className="modal modal-bottom md:modal-middle bg-transparent">
            <div className="modal-box border-2 border-black mx-4">
              <label
                onClick={handleUseTemplate}
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <TempleteBoardModal
                tempBMTitle={title}
                bgUrl={bg}
              ></TempleteBoardModal>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
