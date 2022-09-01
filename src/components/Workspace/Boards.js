import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CommonTopDesign from "./CommonTopDesign";
import { useDispatch } from "react-redux";
import { setWorkspaceID } from "../../global-state/actions/reduxActions";

const Boards = () => {
  const { shortname } = useParams();
  console.log(shortname);
  const currentBoards = useSelector((state) => state.currentWorkspaceBoards);
  const navigate = useNavigate();
  const workspaces = useSelector((state) => state.workspace);
  const currentWorkspace = workspaces.filter(
    (workspaces) => workspaces.shortname === shortname
  );
  // console.log(currentWorkspace[0]._id)
  const lastWorkspaceID = useSelector((state) => state.lastWorkspaceID);
  console.log(lastWorkspaceID);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto">
      <CommonTopDesign></CommonTopDesign>
      <div className="mx-12">
        <h1 className="text-2xl mb-5">Boards</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
          <div className="bg-base-100 drop-shadow border-2 border-black rounded-md">
            <label
              htmlFor="my-modal-6"
              className="rounded-md hover:cursor-pointer hover:bg-gray-100  hover:font-bold flex  h-32 justify-center items-center"
              onClick={() => {
                dispatch(setWorkspaceID(currentWorkspace[0]?._id));
              }}
              //   onClick={() => {
              //     dispatch(setWorkspaceID(item._id))
              //   }}
            >
              <p>Create new board</p>
              {/* <FaRegPlusSquare className="mr-1 text-sm"></FaRegPlusSquare> */}
            </label>
          </div>
          {currentBoards?.map((item) => (
            <div
              key={item._id}
              onClick={() => navigate(`/${shortname}/${item._id}`)}
              className="bg-base-100 drop-shadow rounded-md border-2"
            >
              <label
                className="rounded-md hover:cursor-pointer hover:bg-orange-300  hover:font-bold flex  h-32 justify-center items-center"
                style={{
                  background: `url(${item.boardBg})`,
                  backgroundSize: "cover",
                }}
              >
                <p className="text-lg text-center text-white font-bold">
                  {item.title}
                </p>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Boards;
