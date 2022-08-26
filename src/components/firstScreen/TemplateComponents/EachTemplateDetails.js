import React from "react";
import { useParams } from "react-router-dom";

const EachTemplateDetails = () => {
  const params = useParams();
  return (
    <div>
      <p>
        hiii from {params.category} hello {params.id}
      </p>
    </div>
  );
};

export default EachTemplateDetails;
