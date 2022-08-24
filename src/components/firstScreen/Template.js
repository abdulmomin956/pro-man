import React from "react";
import { useEffect, useState } from "react";
import EachTemplate from "./EachTemplate";

const Template = () => {
  const [categories, setCategories] = useState([]);
  const [popularTemplates, setPopularTemplates] = useState([]);
  const [demoTemplates, setDemoTemplates] = useState([]);
  const [businessTemplates, setBusinessTemplates] = useState([]);
  const [designTemplates, setDesignTemplates] = useState([]);
  const [educationTemplates, setEducationTemplates] = useState([]);
  const [engineeringTemplates, setEngineeringTemplates] = useState([]);
  const [marketingTemplates, setMarketingTemplates] = useState([]);
  const [remoteTemplates, setRemoteTemplates] = useState([]);

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
    const demoTemplates = popularTemplates.slice(0, 3);
    setDemoTemplates(demoTemplates);

    const businessTemplates = popularTemplates
      .filter((item) => item.categorie === "Business")
      .slice(0, 3);
    setBusinessTemplates(businessTemplates);

    const designTemplates = popularTemplates
      .filter((item) => item.categorie === "Design")
      .slice(0, 3);
    setDesignTemplates(designTemplates);

    const educationTemplates = popularTemplates
      .filter((item) => item.categorie === "Education")
      .slice(0, 3);
    setEducationTemplates(educationTemplates);

    const engineeringTemplates = popularTemplates
      .filter((item) => item.categorie === "Engineering")
      .slice(0, 3);
    setEngineeringTemplates(engineeringTemplates);

    const marketingTemplates = popularTemplates
      .filter((item) => item.categorie === "Marketing")
      .slice(0, 3);
    setMarketingTemplates(marketingTemplates);

    const remoteTemplates = popularTemplates
      .filter((item) => item.categorie === "Remote")
      .slice(0, 3);
    setRemoteTemplates(remoteTemplates);
  }, [popularTemplates]);

  return (
    <div className="px-4 my-7">
      {/* This Board pages showing when enter to the site */}
      <p className="text-xl font-semibold mt-3">Featured categories</p>

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
        <p className="text-xl font-semibold"> New and notable templates</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {demoTemplates.map((item) => (
          <EachTemplate key={item._id} item={item}></EachTemplate>
        ))}
      </div>

      <div>
        <div className="flex items-center flex-row gap-3 mb-6">
          <img
            className="w-[24px] rounded-md"
            src="https://a.trellocdn.com/prgb/dist/images/templates/categories/small/business.6b1a625e841b96791d68.svg"
            alt=""
          />
          <p className="text-xl font-semibold">Business</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {businessTemplates.map((item) => (
            <EachTemplate key={item._id} item={item}></EachTemplate>
          ))}
        </div>
      </div>

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
          {designTemplates.map((item) => (
            <EachTemplate key={item._id} item={item}></EachTemplate>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center flex-row gap-3 mb-6">
          <img
            className="w-[24px] rounded-md"
            src="https://a.trellocdn.com/prgb/dist/images/templates/categories/small/education.070ebae9f7177f08cff6.svg"
            alt=""
          />
          <p className="text-xl font-semibold">Education</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {educationTemplates.map((item) => (
            <EachTemplate key={item._id} item={item}></EachTemplate>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center flex-row gap-3 mb-6">
          <img
            className="w-[24px] rounded-md"
            src="https://a.trellocdn.com/prgb/dist/images/templates/categories/small/engineering.457121414fa10aa6029a.svg"
            alt=""
          />
          <p className="text-xl font-semibold">Engineering</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {engineeringTemplates.map((item) => (
            <EachTemplate key={item._id} item={item}></EachTemplate>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center flex-row gap-3 mb-6">
          <img
            className="w-[24px] rounded-md"
            src="https://a.trellocdn.com/prgb/dist/images/templates/categories/small/marketing.3695bf4ae87a54c23f88.svg"
            alt=""
          />
          <p className="text-xl font-semibold">Marketing</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {marketingTemplates.map((item) => (
            <EachTemplate key={item._id} item={item}></EachTemplate>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center flex-row gap-3 mb-6">
          <img
            className="w-[24px] rounded-md"
            src="https://a.trellocdn.com/prgb/dist/images/templates/categories/small/remote-work.338e484944b19a8df667.svg"
            alt=""
          />
          <p className="text-xl font-semibold">Remote work</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {remoteTemplates.map((item) => (
            <EachTemplate key={item._id} item={item}></EachTemplate>
          ))}
        </div>
      </div>

      {/* **Your Workspace section End here** */}
    </div>
  );
};

export default Template;
