import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AllTemplates } from "../../Home";
import Details from "./Details";

const EachTemplateDetails = () => {
  const params = useParams();
  const { popularTemplates } = useContext(AllTemplates);
  const [template, setTemplate] = useState([]);

  useEffect(() => {
    const theTemplate = popularTemplates.filter(
      (item) => item._id === params.id
    );
    setTemplate(theTemplate);
    console.log(theTemplate);
  }, [popularTemplates, params]);

  // console.log(popularTemplates);
  // console.log(template);
  // console.log(params.id);

  return (
    <div>
      {template.map((item) => (
        <Details key={item._id} item={item}></Details>
      ))}
    </div>
  );
};

export default EachTemplateDetails;
