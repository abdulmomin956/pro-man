import React from "react";
import newCreation from "../../../images/new creation.png";

const TemplateCreateSection = () => {
  return (
    <section className="flex justify-center items-center border-2">
      <div>
        <p>Show the world how you use Pro Man</p>
        <p>
          There are millions of ways to be productive with Proman. Show others
          how you use Trello by creating a public template.
        </p>
        <button>Get started</button>
      </div>
      <div>
        <img src={newCreation} alt="" />
      </div>
    </section>
  );
};

export default TemplateCreateSection;
