import React from "react";
import { FaBoxes, FaUserFriends, FaCogs } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import { GrUpgrade } from "react-icons/gr";

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
      {/* **Most popular template section start here** */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
        {popularTemplates.map((template, i) => (
          <div key={i} className="align-middle" style={{
            height: "100px", maxWidth: "180px", borderRadius: "5px",
            backgroundSize: "cover", backgroundImage: `url(${template.img})`
          }}>
            <div>
              <button className="btn btn-xs btn-accent m-3">TEMPLATE</button>
            </div>
            <p className="text-base font-bold text-white ">{template.title} </p>
          </div>
        ))}
      </div>
      {/* **Most popular template section End here** */}


      {/* **Your Workspace section start here** */}
      <div className="my-16">
        <p className="text-2xl font-bold text-gray-500">YOUR WORKSPACES</p>
        <div className="md:flex items-center justify-between">
          <div className="flex items-center my-5">
            <span className="bg-primary text-3xl font-bold rounded text-white px-2">Pm</span>
            <h2 className="text-2xl font-bold ml-4">ProMan Workspace</h2>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-1">
            <div><button className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-xl font-semibold hover:font-bold hover:bg-gray-300 flex items-center"><FaBoxes className="mr-1 text-sm"></FaBoxes> Boards</button> </div>
            <div><button className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-xl font-semibold hover:font-bold hover:bg-gray-300 flex items-center"><HiViewGridAdd className="mr-1 text-sm"></HiViewGridAdd> Views</button> </div>
            <div><button className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-xl font-semibold hover:font-bold hover:bg-gray-300 flex items-center"><FaUserFriends className="mr-1 text-sm"></FaUserFriends> Members</button> </div>
            <div><button className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-xl font-semibold hover:font-bold hover:bg-gray-300 flex items-center"><FaCogs className="mr-1 text-sm"></FaCogs> Settings</button> </div>
            <div><button className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-xl font-semibold hover:font-bold hover:bg-gray-300 flex items-center"><GrUpgrade className="mr-1 text-sm"></GrUpgrade> Upgrade</button> </div>

          </div>
        </div>
        <div>
          Create New Board
        </div>
      </div>
      {/* **Your Workspace section End here** */}



    </div>
  );
};

export default Board;
