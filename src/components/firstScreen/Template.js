import React from "react";
import { useEffect, useState } from "react";
import EachTemplate from "./EachTemplate";

const Template = () => {
  const [categories, setCategories] = useState([]);
  const [popularTemplates, setPopularTemplates] = useState([]);
  const [demoTemplates, setDemoTemplates] = useState([]);

  useEffect(() => {
    fetch("Templates/featuredCategories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch("Templates/featuredData.json")
      .then((res) => res.json())
      .then((data) => setPopularTemplates(data));
  }, []);

  useEffect(() => {
    const templates = popularTemplates.slice(0, 3);
    setDemoTemplates(templates);
  }, [popularTemplates]);

  console.log(demoTemplates);

  return (
    <div className="px-4">
      {/* This Board pages showing when enter to the site */}
      <p className="text-2xl font-semibold mt-3">Featured categories</p>

      {/* **Featured categories start here** */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 cursor-pointer my-8">
        {categories.map((template) => (
          <div key={template._id} className="">
            <img
              className="w-[105px] mx-auto hover:shadow-xl rounded-md"
              src={template.img}
              alt=""
            />
            <p className="text-base font-semibold text-center">
              {template.title}
            </p>
          </div>
        ))}
      </div>

      {/* **Your Workspace section start here** */}
      <div className="flex items-center flex-row gap-3 mb-6">
        <img
          className="w-[24px] rounded-md"
          src="https://a.trellocdn.com/prgb/dist/images/templates/new-and-notable.32ad10f52fc078a76ea4.svg"
          alt=""
        />
        <p className="text-2xl font-semibold"> New and notable templates</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {demoTemplates.map((item) => (
          <EachTemplate key={item._id} item={item}></EachTemplate>
        ))}
      </div>

      {/* **Your Workspace section End here** */}
    </div>
  );
};

export default Template;
