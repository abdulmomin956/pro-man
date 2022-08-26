import { Route, Routes } from "react-router-dom";
import Login from "./components/firebase/Login";
import Register from "./components/firebase/Register";
import Home from "./components/Home";
import Navbar from "./components/shared/Navbar";
import { ToastContainer } from "react-toastify";
import RequireAuth from "./components/requireAuth/RequireAuth";
import auth from "./components/firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
// import Board from "./components/firstScreen/Board";
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
import MakeAdmin from "./components/dashboard/MakeAdmin";
import TemplateCategory from "./components/firstScreen/TemplateComponents/TemplateCategory";
import Home1 from "./components/Home/Home";
import { useDispatch } from "react-redux";
import { setUser } from "./global-state/actions/reduxActions";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import EachTemplateDetails from "./components/firstScreen/TemplateComponents/EachTemplateDetails";
import VerifyInvitedMember from "./components/shared/VerifyInvitedMember";

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
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(null);
  const dispatch = useDispatch();
  const token = getWithExpiry("token");

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
          "https://morning-coast-54182.herokuapp.com/api/auth",
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

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="#F5F5F5">
      {/* <ToastContainer /> */}

      <Routes>
        {!user?.email && <Route path="/" element={<Home1 />}></Route>}
        <Route path="/invite/:workspaceId/:email/:token" element={<RequireAuth><VerifyInvitedMember /></RequireAuth>}></Route>
        {user?.email && (
          <Route
            path="/"
            element={
              <RequireAuth>
                <Navbar />
              </RequireAuth>
            }
          >

            {user?.role !== "Admin" && <>
              <Route path="/" element={<Home />}>
                <Route path="/my-board" element={<Board />}></Route>
                <Route path="/template" element={<Template />}>
                  <Route
                    path="/template/:category"
                    element={<TemplateCategory></TemplateCategory>} />
                </Route>
                <Route
                  path="/category/:id"
                  element={<EachTemplateDetails></EachTemplateDetails>}
                ></Route>
                <Route path="/" element={<HomeScreen />}></Route>
              </Route>
              <Route path="/:shortname" element={<Workspace />}>
                <Route path="/:shortname/" element={<Boards />}></Route>
                <Route path="/:shortname/members" element={<Members />}>
                  <Route path="/:shortname/members" element={<WorkspaceMembers />} />
                  <Route path="/:shortname/members/guests" element={<Guests />} />
                  <Route path="/:shortname/members/pending" element={<Pending />} />
                </Route>
                <Route path="/:shortname/account" element={<Account />} />
                <Route path="/:shortname/:id" element={<BoardDetails />} />
              </Route>
              <Route path="/profile" element={<Profiles />}>
                <Route path="/profile/" element={<ProfileValidity />} />
                <Route path="profileActive" element={<ProfileActive />} />
                <Route path="profileCard" element={<ProfileCard />} />
                <Route path="profileSettings" element={<ProfileSetting />} />
              </Route>
            </>
            }
            {/* Just for admin  */}
            {
              user?.role === "Admin" && <Route path="/" element={<MakeAdmin />} />
            }
          </Route>
        )}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;