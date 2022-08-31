import { FaArrowAltCircleRight } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";
import Accordion from "@material-ui/core/Accordion/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails/AccordionDetails";
import Typography from "@material-ui/core/Typography/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FaBoxes, FaUserFriends, FaCogs } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import { setWorkspaceID } from "../../global-state/actions/reduxActions";
import InviteMemberModal from "../shared/InviteMemberModal";
import { useState } from "react";

const Sidebar = () => {
  const data = useSelector((state) => state.workspace);
  const memberWorkspace = useSelector((state) => state.membersWorkspace);
  const dispatch = useDispatch();
  const [workspaceId, setWorkspaceId] = useState('');

  // const [user] = useAuthState(auth);
  // const email = user?.email;
  // const data = useSelector(state => state.workspace)

  console.log(memberWorkspace);
  return (
    <div>
      <div className="drawer drawer-mobile static ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content " id="sidebarOverflow">
          {/* <!-- Page content here --> */}

          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="drawer-button cursor-pointer ml-5 mt-4  lg:hidden absolute top-10 left-0"
          >
            <FaArrowAltCircleRight className="text-3xl"></FaArrowAltCircleRight>
          </label>
        </div>
        <div className="drawer-side lg:mx-7 shadow">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul
            className="menu overflow-y-auto w-52 bg-base-100 text-base-content"
            id="sidebarOverflow"
          >
            {/* <!-- Sidebar content here --> */}
            <li className="">
              <NavLink to="/my-board" className="mb-2 p-2 pl-5 pr-5 myButton">
                Boards
              </NavLink>
            </li>
            <li>
              <NavLink to="/template" className="mb-2 p-2 pl-5 pr-5 myButton">
                Templates
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="mb-2 p-2 pl-5 pr-5 myButton">
                Home
              </NavLink>
            </li>

            <div className="flex items-center justify-between bg-none m-3">
              <p>Workspace</p>
              <label
                htmlFor="my-modal-sa6"
                className="myButton p-1 rounded-sm cursor-pointer"
              >
                <MdAddCircleOutline className="text-xl  "></MdAddCircleOutline>
              </label>
            </div>

            <div>
              <div>
                {data.map((item) => (
                  <Accordion key={item._id}>
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon
                          className=""
                          style={{ fontSize: "35px", fontWeight: "bold" }}
                        ></ExpandMoreIcon>
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      style={{ fontSize: "25px", fontWeight: "bold" }}
                    >
                      <Typography className="" style={{ fontWeight: "bold" }}>
                        {item.title}{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      style={{
                        padding: "0px",
                        margin: "0 auto",
                        justifyContent: "center",
                      }}
                    >
                      <div>
                        <p className=" w-48  flex flex-col items-center justify-center">
                          <Link
                            to={`/${item.shortname}`}
                            className="sidebar-workspace-toggle-button mb-2 flex items-center w-5/6"
                          >
                            <FaBoxes className="mr-1 text-sm text-primary"></FaBoxes>{" "}
                            Boards
                          </Link>
                          <Link
                            to=""
                            className="sidebar-workspace-toggle-button mb-2 flex items-center w-5/6"
                          >
                            <HiViewGridAdd className="mr-1 text-sm text-primary"></HiViewGridAdd>{" "}
                            Views
                          </Link>
                          <span className="sidebar-workspace-toggle-button mb-2 w-5/6 flex justify-between">
                            <Link
                              onClick={() => {
                                dispatch(setWorkspaceID(item._id));
                              }}
                              to={`/${item.shortname}/members`}
                              className=" flex items-center "
                            >
                              <FaUserFriends className="mr-1 text-sm text-primary"></FaUserFriends>{" "}
                              Members
                            </Link>
                            <label
                              className="text-xl cursor-pointer "
                              htmlFor="inviteMember"
                              onClick={() => setWorkspaceId(item._id)}
                            >
                              +
                            </label>
                          </span>
                          <Link
                            onClick={() => {
                              dispatch(setWorkspaceID(item._id));
                            }}
                            to={`/${item.shortname}/account`}
                            className="sidebar-workspace-toggle-button mb-2 flex items-center w-5/6"
                          >
                            <FaCogs className="mr-1 text-sm text-primary"></FaCogs>{" "}
                            Settings
                          </Link>
                        </p>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                ))}


                {memberWorkspace.map((item) => (
                  <Accordion key={item._id}>
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon
                          className=""
                          style={{ fontSize: "35px", fontWeight: "bold" }}
                        ></ExpandMoreIcon>
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      style={{ fontSize: "25px", fontWeight: "bold" }}
                    >
                      <Typography className="" style={{ fontWeight: "bold" }}>
                        {item.title}{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      style={{
                        padding: "0px",
                        margin: "0 auto",
                        justifyContent: "center",
                      }}
                    >
                      <div>
                        <p className=" w-48  flex flex-col items-center justify-center">
                          <Link
                            to={`/${item.shortname}`}
                            className="sidebar-workspace-toggle-button mb-2 flex items-center w-5/6"
                          >
                            <FaBoxes className="mr-1 text-sm text-primary"></FaBoxes>{" "}
                            Boards
                          </Link>
                          <Link
                            to=""
                            className="sidebar-workspace-toggle-button mb-2 flex items-center w-5/6"
                          >
                            <HiViewGridAdd className="mr-1 text-sm text-primary"></HiViewGridAdd>{" "}
                            Views
                          </Link>
                          <span className="sidebar-workspace-toggle-button mb-2 w-5/6 flex justify-between">
                            <Link
                              onClick={() => {
                                dispatch(setWorkspaceID(item._id));
                              }}
                              to={`/${item.shortname}/members`}
                              className=" flex items-center "
                            >
                              <FaUserFriends className="mr-1 text-sm text-primary"></FaUserFriends>{" "}
                              Members
                            </Link>
                            <label
                              className="text-xl cursor-pointer "
                              htmlFor="inviteMember"
                              onClick={() => setWorkspaceId(item._id)}
                            >
                              +
                            </label>
                          </span>
                          <Link
                            onClick={() => {
                              dispatch(setWorkspaceID(item._id));
                            }}
                            to={`/${item.shortname}/account`}
                            className="sidebar-workspace-toggle-button mb-2 flex items-center w-5/6"
                          >
                            <FaCogs className="mr-1 text-sm text-primary"></FaCogs>{" "}
                            Settings
                          </Link>
                        </p>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
              <div>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <InviteMemberModal workspaceId={workspaceId}></InviteMemberModal>
    </div>
  );
};

export default Sidebar;
