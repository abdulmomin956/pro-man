import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Template = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("Templates/featuredData.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const popularTemplates = [
    {
      _id: 1,
      title: "Project Management",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT120qIDJDmhe8BNjc4tdgURzvtudzpaCJtJw&usqp=CAU",
    },
    {
      _id: 2,
      title: "Project Management",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpPskxzYMDQzouodNrKlHQ8oFCwrFpwKzZA&usqp=CAU",
    },
    {
      _id: 3,
      title: "Project Management",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT120qIDJDmhe8BNjc4tdgURzvtudzpaCJtJw&usqp=CAU",
    },
    {
      _id: 4,
      title: "Project Management",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpPskxzYMDQzouodNrKlHQ8oFCwrFpwKzZA&usqp=CAU",
    },
    {
      _id: 5,
      title: "Project Management",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT120qIDJDmhe8BNjc4tdgURzvtudzpaCJtJw&usqp=CAU",
    },
    {
      _id: 6,
      title: "Project Management",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpPskxzYMDQzouodNrKlHQ8oFCwrFpwKzZA&usqp=CAU",
    },
    {
      _id: 7,
      title: "Project Management",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT120qIDJDmhe8BNjc4tdgURzvtudzpaCJtJw&usqp=CAU",
    },
    {
      _id: 8,
      title: "Project Management",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpPskxzYMDQzouodNrKlHQ8oFCwrFpwKzZA&usqp=CAU",
    },
    {
      _id: 9,
      title: "Project Management",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT120qIDJDmhe8BNjc4tdgURzvtudzpaCJtJw&usqp=CAU",
    },
    {
      _id: 10,
      title: "Project Management",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT120qIDJDmhe8BNjc4tdgURzvtudzpaCJtJw&usqp=CAU",
    },
  ];
  return (
    <div className="px-4">
      {/* This Board pages showing when enter to the site */}
      <p className="text-2xl font-semibold my-3">Featured categories</p>

      {/* **Featured categories start here** */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
        {categories.map((template) => (
          <div key={template._id} className="">
            <img
              className="w-[120px] hover:shadow-xl hover:rounded-lg"
              src={template.img}
              alt=""
            />
            <p className="text-base font-semibold">{template.title}</p>
          </div>
        ))}
      </div>

      {/* **Your Workspace section start here** */}
      <h2 className="text-2xl font-medium my-6">
        <span className="flex items-center text-gray-700">
          New and notable templates
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
        {popularTemplates.map((template, i) => (
          <div
            key={i}
            className="align-middle"
            style={{
              height: "100px",
              maxWidth: "180px",
              borderRadius: "5px",
              backgroundSize: "cover",
              backgroundImage: `url(${template.img})`,
            }}
          >
            <div>
              <button className="btn btn-xs btn-accent m-3">TEMPLATE</button>
            </div>
            <p className="text-base font-bold text-white ">{template.title} </p>
          </div>
        ))}
      </div>

      {/* **Your Workspace section End here** */}
    </div>
  );
};

export default Template;
