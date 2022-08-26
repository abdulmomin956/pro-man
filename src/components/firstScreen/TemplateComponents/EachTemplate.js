import React from "react";
import { useNavigate } from "react-router-dom";

const EachTemplate = ({ item }) => {
  const { _id, category, bg, profilePic, title, creator, about, used, views } =
    item;
  const navigate = useNavigate();
  // console.log(item);

  const handleNavigate = (id) => {
    navigate("/category/" + id);
  };

  return (
    <div onClick={() => handleNavigate(_id)}>
      <div>
        <img
          className="rounded-md md:w-auto md:h-auto h-[135px] w-[100vw] hover:shadow-2xl"
          src={bg}
          alt=""
        />
      </div>

      <div className="px-4 mt-[-38px] pb-6">
        <div className="mb-3">
          <img
            className="w-[52px] inline rounded-full border-[3px] border-white"
            src={profilePic}
            alt=""
          />
        </div>
        <p className=" font-bold">{title}</p>
        <p className=" text-sm">{creator}</p>
        <p className=" text-sm">
          {about.length > 34 ? about.slice(0, 34) + "..." : about}
        </p>

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
  );
};

export default EachTemplate;
