import { Route, Routes } from "react-router-dom";
import Login from "./components/firebase/Login";
import Register from "./components/firebase/Register";
import Home from "./components/Home";
import Navbar from "./components/shared/Navbar";
import RequireAuth from "./components/requireAuth/RequireAuth";
import HomeScreen from "./components/firstScreen/HomeScreen";
import Template from "./components/firstScreen/Template";
import Loading from "./components/shared/Loading";
import BoardDetails from "./components/boardDetails/BoardDetails";
import NotFound from "./components/shared/NotFound";
import Board from "./components/firstScreen/Board";
import Workspace from "./components/Workspace/Workspace";
import Boards from "./components/Workspace/Boards";
import Members from "./components/Workspace/Members";
import Account from "./components/Workspace/Account";
import ProfileValidity from "./components/Profile/ProfileValidity";
import ProfileActive from "./components/Profile/ProfileActive";
import ProfileCard from "./components/Profile/ProfileCard";
import ProfileSetting from "./components/Profile/ProfileSetting";
import Profiles from "./components/Profile/Profiles";
import WorkspaceMembers from "./components/Workspace/Member/WorkspaceMembers";
import Guests from "./components/Workspace/Member/Guests";
import Pending from "./components/Workspace/Member/Pending";
import { useSelector } from "react-redux";
import MakeAdmin from "./components/admin/MakeAdmin";
import TemplateCategory from "./components/firstScreen/TemplateComponents/TemplateCategory";
import Home1 from "./components/Home/Home";
import { useDispatch } from "react-redux";
import { setChats, setUser } from "./global-state/actions/reduxActions";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import EachTemplateDetails from "./components/firstScreen/TemplateComponents/EachTemplateDetails";
import VerifyInvitedMember from "./components/shared/VerifyInvitedMember";
import Chat from "./components/Message/Chat";
import Admin from "./components/admin/Admin";
import Dashboard from "./components/admin/Dashboard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import UserHelp from "./components/UserHelp/UserHelp";
import Message from "./components/Message/message/Message";


function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key);
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.accessToken;
}

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(null);
  const dispatch = useDispatch();
  const token = getWithExpiry("token");
  const [conversations, setConversations] = useState([]);

  if (!token) {
    dispatch(setUser(null));
  }

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        setLoading(true);
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        const bodyParameters = {
          key: "value",
        };
        const res = await axios.post(
          "http://13.126.5.141:5000/api/auth",
          bodyParameters,
          config
        );
        // console.log(res);
        if (res.status === 200) {
          // console.log(res.data);
          dispatch(setUser(res.data));
          setLoading(false);
        } else {
          dispatch(setUser(null));
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [dispatch, token]);
  // console.log(user);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("http://13.126.5.141:5000/api/conversations/" + user?._id);
        setConversations(res.data);
        dispatch(setChats(res.data))
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [dispatch, user?._id]);

  // console.log(conversations);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="#F5F5F5">
      {/* <ToastContainer /> */}


      <Routes>
        {!user?.email && <Route path="/" element={<Home1 />}></Route>}
        <Route path="/invite/:workspaceId/:email/:token" element={<VerifyInvitedMember />}></Route>
        {user?.email && <Route path="/help" element={<UserHelp></UserHelp>}></Route>}

        <Route
          path="/"
          element={
            <RequireAuth>
              <Navbar />
            </RequireAuth>
          }
        >
          <Route path="/profile" element={<Profiles />}>
            <Route path="/profile/" element={<ProfileValidity />} />
            <Route path="profileActive" element={<ProfileActive />} />
            <Route path="profileCard" element={<ProfileCard />} />
            <Route path="profileSettings" element={<ProfileSetting />} />
          </Route>
          <Route path="chat" element={<Chat />}>
            <Route path={`/chat/`} element={<Message />} />
            <Route path={`/chat/:currentChatId`} element={<Message />} />
          </Route>
          {user?.role !== "Admin" && (
            <>
              <Route path="/" element={<Home />}>
                <Route path="/my-board" element={<Board />}></Route>
                <Route path="/template" element={<Template />}></Route>
                <Route
                  path="/template/:category"
                  element={<TemplateCategory></TemplateCategory>}
                />
                <Route
                  path="/category/:id"
                  element={<EachTemplateDetails></EachTemplateDetails>}
                ></Route>
                <Route path="/" element={<HomeScreen />}></Route>
              </Route>
              <Route path="/:shortname" element={<Workspace />}>
                <Route path="/:shortname/" element={<Boards />}></Route>
                <Route path="/:shortname/members" element={<Members />}>
                  <Route
                    path="/:shortname/members"
                    element={<WorkspaceMembers />}
                  />
                  <Route
                    path="/:shortname/members/guests"
                    element={<Guests />}
                  />
                  <Route
                    path="/:shortname/members/pending"
                    element={<Pending />}
                  />
                </Route>
                <Route path="/:shortname/account" element={<Account />} />
                <Route path="/:shortname/:id" element={<BoardDetails />} />
              </Route>
            </>
          )}
          {/* Just for admin  */}
          {user?.role === "Admin" && (
            <Route path="/" element={<Admin />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/makeadmin" element={<MakeAdmin />} />
            </Route>
          )}
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>


      </Routes>
    </div>
  );
}

export default App;
