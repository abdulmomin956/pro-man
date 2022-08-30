import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AllTemplates } from "../../Home";
import EachTemplate from "./EachTemplate";

// Extra component

const EachTemplateSection = ({ params }) => {
  const [templates, setTemplates] = useState([]);
  const { popularTemplates } = useContext(AllTemplates);

  useEffect(() => {
    const templates = popularTemplates.filter(
      (item) => item.categorie === { params }
    );
    setTemplates(templates);
  }, [params, popularTemplates]);

  return (
    <div>
      <div className="flex items-center flex-row gap-3 mb-6">
        <img
          className="w-[24px] rounded-md"
          src="https://a.trellocdn.com/prgb/dist/images/templates/categories/small/design.e617072931480fdd44da.svg"
          alt=""
        />
        <p className="text-xl font-semibold">{params}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {templates.map((item) => (
          <EachTemplate key={item._id} item={item}></EachTemplate>
        ))}
      </div>
    </div>
  );
};

export default EachTemplateSection;
