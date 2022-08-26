import React from "react";
import { useParams } from "react-router-dom";

const TemplateCategory = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <p>hiii from {params.category}</p>
    </div>
  );
};

export default TemplateCategory;
