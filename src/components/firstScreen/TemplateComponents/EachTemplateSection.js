import React from "react";
import EachTemplate from "./EachTemplate";

const EachTemplateSection = () => {
  return (
    <div>
      <div className="flex items-center flex-row gap-3 mb-6">
        <img
          className="w-[24px] rounded-md"
          src="https://a.trellocdn.com/prgb/dist/images/templates/categories/small/design.e617072931480fdd44da.svg"
          alt=""
        />
        <p className="text-xl font-semibold">Design</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* {designTemplates.map((item) => (
            <EachTemplate key={item._id} item={item}></EachTemplate>
          ))} */}
      </div>
    </div>
  );
};

export default EachTemplateSection;
