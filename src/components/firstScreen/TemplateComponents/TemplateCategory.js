import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AllTemplates } from "../../Home";
import EachTemplate from "./EachTemplate";
import TemplateCreateSection from "./TemplateCreateSection";

const TemplateCategory = () => {
  const params = useParams();
  const category = params.category;
  const { popularTemplates } = useContext(AllTemplates);
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const filterOutTemplates = popularTemplates.filter(
      (item) => item.categorie === "Engineering"
    );
    setTemplates(filterOutTemplates);
  }, [popularTemplates, category]);

  console.log(popularTemplates);
  console.log(templates);

  return (
    <div>
      <div>
        <div className="flex items-center flex-row gap-3 mb-6">
          <img
            className="w-[24px] rounded-md"
            src="https://a.trellocdn.com/prgb/dist/images/templates/categories/small/design.e617072931480fdd44da.svg"
            alt=""
          />
          <p className="text-xl font-semibold">{category}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {templates.map((item) => (
            <EachTemplate key={item._id} item={item}></EachTemplate>
          ))}
        </div>
      </div>
      <TemplateCreateSection></TemplateCreateSection>
    </div>
  );
};

export default TemplateCategory;
