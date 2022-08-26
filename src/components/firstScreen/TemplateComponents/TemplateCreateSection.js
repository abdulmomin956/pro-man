import React from "react";
import newCreation from "../../../images/new creation.png";

const TemplateCreateSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-center items-center gap-5 md:gap-3 border-t-2 px-[35px] py-[25px] mx-5 my-6">
      <div>
        <p className=" font-semibold text-2xl mb-3">
          Show the world how you use Pro Man
        </p>
        <p>
          There are millions of ways to be productive with Proman. Show others
          how you use Trello by creating a public template.
        </p>
        <button className="px-2 py-2 rounded-md bg-[#0079bf] text-white mt-4 hover:bg-[rgb(28,51,92)]">
          Get started
        </button>
      </div>
      <div>
        <img src={newCreation} alt="" />
      </div>
    </section>
  );
};

export default TemplateCreateSection;
