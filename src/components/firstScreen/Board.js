import React from "react";
import { FaBoxes } from "react-icons/fa";

const Board = () => {
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
    <div className="px-8">
      {/* This Board pages showing when enter to the site */}
      <h2 className="text-2xl font-medium my-6">
        <span className="flex items-center text-gray-700">
          <FaBoxes className="mr-3"></FaBoxes>Most popular templates
        </span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
        {popularTemplates.map((template) => (
          <div className="align-middle" style={{ height: "100px", maxWidth: "180px", borderRadius: "5px", 
          backgroundSize:"cover", backgroundImage: `url(${template.img})`}}>
            <div>
                <button className="btn btn-xs btn-accent m-3">TEMPLATE</button>
            </div>
            <p className="text-base font-bold text-white ">{template.title} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
