import React, { useState } from "react";
import "./Account.css";
import CommonTopDesign from "./CommonTopDesign";
import { MdLockOutline, MdPublic } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import { async } from "@firebase/util";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoadWorkspace } from "../../global-state/actions/reduxActions";

const Account = () => {
  const { shortname } = useParams();
  const [visibility, setVisibility] = useState(true);
  const [validName, setValidName] = useState(false);
  const [matchField, setMatchField] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [allBoardData, setAllBoardData] = useState([])
  const workspaces = useSelector(state => state.workspace)
  const membersWorkspace = useSelector(state => state.membersWorkspace)
  // console.log(allBoardData);

  useEffect(() => {
    if (workspaces) {
      setAllBoardData(workspaces)
    }
  }, [workspaces])
  useEffect(() => {
    if (membersWorkspace) {
      setAllBoardData([...workspaces, ...membersWorkspace])
    }
  }, [membersWorkspace, workspaces])
  const workspace = allBoardData.filter(workspaces => workspaces.shortname === shortname)

  useEffect(() => {
    if (workspace[0]?.title === matchField) {
      setValidName(true);
    } else {
      setValidName(false);
    }
  }, [workspace, matchField]);

  const deleteWorkspace = async (event) => {
    console.log("Delete Workspace Button is clicked.....");

    await axios
      .delete(
        `https://morning-coast-54182.herokuapp.com/sworkspace/api/${workspace[0]?._id}`
      )
      .then((res) => {
        navigate("/");
        dispatch(setLoadWorkspace(true))
        // console.log(res);
      });
  };

  return (
    <div style={{ width: "100%" }}>
      <CommonTopDesign></CommonTopDesign>

      <div className=" w-9/12 mx-auto">
        <p className="text-xl font-bold">Seeting</p>
        <p className="text font-semibold">Workspace visibility</p>
        <hr className="my-3"></hr>
        <div className="flex justify-between items-center">
          {visibility ? (
            <p className="text-sm inline-block pr-5">
              <span className="flex items-center font-bold">
                <MdLockOutline className=" text-red-700"></MdLockOutline>{" "}
                Private{" "}
              </span>
              This Workspace is private. It's not indexed or visible to those
              outside the Workspace.
            </p>
          ) : (
            <p className="text-sm inline-block pr-5">
              <span className="flex items-center font-bold">
                <MdPublic className=" text-green-700"></MdPublic> Public{" "}
              </span>
              This Workspace is public. It's visible to anyone with the link and
              will show up in search engines like Google. Only those invited to
              the Workspace can add and edit Workspace boards.
            </p>
          )}

          {/* <span className="btn btn-sm" >Change</span> */}

          <div className="dropdown dropdown-end">
            <label tabIndex="0" className=" ">
              <div className="flex justify-center items-center">
                <span className=" font-bold block ">
                  <span className="small-button">Change</span>
                </span>
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3  shadow menu menu-compact dropdown-content bg-base-100 rounded w-64"
            >
              <li onClick={() => setVisibility(true)}>
                <p className="text-xs inline-block">
                  <span className="flex items-center font-bold">
                    <MdLockOutline className=" text-red-700"></MdLockOutline>{" "}
                    Private{" "}
                  </span>
                  This Workspace is private. It's not indexed or visible to
                  those outside the Workspace.
                </p>
              </li>

              <li onClick={() => setVisibility(false)}>
                <p className="text-xs inline-block">
                  <span className="flex items-center font-bold">
                    <MdPublic className=" text-green-700"></MdPublic> Public{" "}
                  </span>
                  This Workspace is public. It's visible to anyone with the link
                  and will show up in search engines like Google. Only those
                  invited to the Workspace can add and edit Workspace boards.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Delete Workspace start here */}
        <div>
          <label
            htmlFor="deleteWorkspace"
            className="btn btn-link px-0 underline text-red-600 hover:text-blue-900 modal-button"
          >
            Delete this Workspace?
          </label>

          <div className="mx-auto w-2/12">
            <input
              type="checkbox"
              id="deleteWorkspace"
              className="modal-toggle"
            />
            <label htmlFor="deleteWorkspace" className="modal cursor-pointer">
              <label
                className="modal-box relative mx-10 md:deleteModal"
                id="sidebarOverflow"
                htmlFor=""
                style={{ height: "70vh", width: "350px" }}
              >
                <div className="flex items-center justify-center">
                  <label
                    htmlFor="deleteWorkspace"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg text-center mb-1">Delete Workspace</h3>
                </div>
                <hr></hr>
                <p className="font-bold mt-4">
                  Are you sure you want to delete Demo Workspace?
                </p>
                <div className="text-gray-500 text-sm mt-3">
                  <p className="font-bold">Things to know</p>
                  <ul className="list-disc mx-5">
                    <li>This is permanent and can't be undone.</li>
                    <li>All boards in this Workspace will be closed.</li>
                    <li>
                      Board members will not be able to interact with closed
                      boards.
                    </li>
                  </ul>
                </div>

                <div className="mt-4 mb-2">
                  <p className="font-bold text-sm mb-2">
                    Enter the Workspace name to delete
                  </p>
                  <input
                    onKeyUp={(e) => setMatchField(e.target.value)}
                    type="text"
                    placeholder="Type here"
                    className="input input-sm input-bordered w-full max-w-xs rounded-none"
                  />
                </div>

                <button
                  onClick={deleteWorkspace}
                  disabled={!validName}
                  className="btn btn-outline btn-error w-full rounded-none"
                >
                  Delete Workspace
                </button>
              </label>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
