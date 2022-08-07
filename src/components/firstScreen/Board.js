import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  FaBoxes,
  FaUserFriends,
  FaCogs,
  FaRegPlusSquare,
  FaRegArrowAltCircleUp,
} from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import Loading from "../shared/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.init";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { LAST_WORKSPACE } from "../../global-state/constants/reduxContstants";
import { setWorkspace, setWorkspaceID } from "../../global-state/actions/reduxActions";
import { useEffect } from "react";
import axios from "axios";
import LoardBoard from "./LoardBoard";




const Board = () => {
  // const lastWorkspaceID = useSelector(state => state.lastWorkspaceID)
  // const re_data = useSelector(state => state)
  const dispatch = useDispatch();
  // console.log(re_data);

  const [user] = useAuthState(auth);
  const email = user.email;

  const { isLoading, error, data } = useQuery(['repoData'], () =>
    fetch(`https://morning-coast-54182.herokuapp.com/workspace/${email}`).then(res =>
      res.json()
    )
  )

  useEffect(() => {
    if (data?.length > 0) {
      const allWorkspaceData = data?.map(item => (
        {
          _id: item._id, title: item.title
        }
      ))
      // console.log(allWorkspaceData);
      dispatch(setWorkspace(allWorkspaceData))
    }
  }, [data, dispatch])



  if (isLoading) {
    <Loading></Loading>;
  }



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
      <h2 className="text-2xl font-medium my-6">
        <span className="flex items-center text-indigo-500">
          <FaBoxes className="mr-3"></FaBoxes>Most popular templates
        </span>
      </h2>
      {/* **Most popular template section start here** */}
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
              <button className="btn btn-xs btn-accent m-3  ">TEMPLATE</button>
            </div>
            <p className="text-base font-bold text-white ">{template.title} </p>
          </div>
        ))}
      </div>
      {/* **Most popular template section End here** */}



      {/* **Your Workspace section start here** */}
      <div className="my-16">
        <p className="text-2xl font-bold text-gray-500">YOUR WORKSPACES</p>
        {data?.map(item =>
          <div key={item._id}>
            <div className="md:flex items-center justify-between">
              <div className="flex items-center my-5">

                <span className="bg-primary text-3xl font-bold rounded text-white px-2 pb-1 uppercase">
                  {item?.title?.charAt(0)}
                </span>
                <h2 className="text-2xl font-bold ml-4 text-indigo-500">{item?.title}</h2>
              </div>
              <div className="grid grid-cols-3 lg:grid-cols-5 gap-1">
                <div>
                  <button className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-xl font-semibold hover:font-bold hover:bg-gray-300 flex items-center">
                    <FaBoxes className="mr-1 text-sm text-primary"></FaBoxes> Boards
                  </button>{" "}
                </div>
                <div>
                  <button className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-xl font-semibold hover:font-bold hover:bg-gray-300 flex items-center">
                    <HiViewGridAdd className="mr-1 text-sm text-primary"></HiViewGridAdd> Views
                  </button>{" "}
                </div>
                <div>
                  <button className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-xl font-semibold hover:font-bold hover:bg-gray-300 flex items-center">
                    <FaUserFriends className="mr-1 text-sm text-primary"></FaUserFriends> Members
                  </button>{" "}
                </div>
                <div>
                  <button className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-xl font-semibold hover:font-bold hover:bg-gray-300 flex items-center">
                    <FaCogs className="mr-1 text-sm text-primary"></FaCogs> Settings
                  </button>{" "}
                </div>
                <div>
                  <button className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-xl font-semibold hover:font-bold hover:bg-gray-300 flex items-center">
                    <FaRegArrowAltCircleUp className="mr-1 text-sm text-primary"></FaRegArrowAltCircleUp> Upgrade
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <LoardBoard props={item._id} />

              <div className=" w-60 bg-base-100 shadow">
                <label
                  htmlFor="my-modal-6"
                  className=" hover:cursor-pointer hover:bg-gray-100  hover:font-bold flex w-60 h-32 justify-center items-center"
                  onClick={() => {
                    dispatch(setWorkspaceID(item._id))
                  }}
                >
                  <p className="mr-2">
                    Create New Board
                  </p>
                  <FaRegPlusSquare className="mr-1 text-sm"></FaRegPlusSquare>

                </label>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* **Your Workspace section End here** */}


    </div>
  );
};

export default Board;
