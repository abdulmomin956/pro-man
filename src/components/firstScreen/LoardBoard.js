import React from "react";
import Loading from "../shared/Loading";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLoadBoard } from "../../global-state/actions/reduxActions";
import { useQuery } from "@tanstack/react-query";
import { RESTAPI } from "../../api";

const LoardBoard = ({ props, workspaceID }) => {
  const navigate = useNavigate();
  const shortname = props;
  const loadBoard = useSelector(state => state.loadBoard)
  const dispatch = useDispatch();



  const boards = useQuery(['boards', workspaceID], () => fetch(`${RESTAPI}board/w/${workspaceID}`).then(res => res.json()))


  useEffect(() => {
    if (loadBoard) {
      dispatch(setLoadBoard(false))
      boards.refetch();
    }
  }, [boards, dispatch, loadBoard])



  if (boards.isLoading) {
    <Loading></Loading>;
  }

  // console.log(data);
  // onClick={() => navigate(`/${shortname}/${item._id}`)}
  return (
    <>
      {boards?.data?.map((item) => (
        <div
          key={item._id}
          onClick={() => navigate(`/${shortname}/${item._id}`)}
          className="bg-base-100 shadow rounded-lg"
        >
          <label
            style={{
              backgroundColor: "#00000026",
              background: `url(${item.boardBg})`,

              WebkitFilter: "grayscale(20%)",
              backgroundSize: "cover",
            }}
            className="py-12 hover:cursor-pointer text-white hover:shadow-xl hover:font-bold flex justify-center items-center flex-row gap-2 rounded-lg"
          //   onClick={() => {
          //     dispatch(setWorkspaceID(item._id))
          //   }}
          >
            <p className="text-lg text-center">
              {item.title.length > 14
                ? item.title.slice(0, 12) + "..."
                : item.title}
            </p>
            {/* <FaRegPlusSquare className="mr-1 text-sm"></FaRegPlusSquare> */}
          </label>
        </div>
      ))}
    </>
  );
};

export default LoardBoard;
