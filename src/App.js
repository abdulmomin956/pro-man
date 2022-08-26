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
import Home1 from "./components/Home/Home"
import { useDispatch } from "react-redux";
import { setEmail } from "./global-state/actions/reduxActions";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key)
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null
  }
  const item = JSON.parse(itemStr)
  const now = new Date()
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key)
    return null
  }
  return item.accessToken
}


function App() {
  const email = useSelector((state) => state.email);
  const [loading, setLoading] = useState(null)
  const dispatch = useDispatch();
  const token = getWithExpiry('token')

  if (!token) {
    dispatch(setEmail(null))
  }


  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        setLoading(true)
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };

        const bodyParameters = {
          key: "value"
        };
        const res = await axios.post(
          'https://morning-coast-54182.herokuapp.com/api/auth',
          bodyParameters,
          config
        )
        if (res.status === 200) {
          dispatch(setEmail(res.data.email))
          setLoading(false)
        }
        else {
          dispatch(setEmail(null))
          setLoading(false)
        }
      }
      fetchData();
    }
  }, [dispatch, token])
  console.log(email);

  if (loading) {
    return <Loading />
  }

  return (
    <div className="#F5F5F5">
      {/* <ToastContainer /> */}


      <Routes>
        {!email && <Route path="/mainHome" element={<Home1></Home1>}></Route>}
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        >
          <Route path="/" element={<Board />}></Route>
          <Route path="/template" element={<Template />}></Route>
          <Route
            path="/template/:category"
            element={<TemplateCategory></TemplateCategory>}
          ></Route>
          <Route path="/homescreen" element={<HomeScreen />}></Route>
        </Route>
        <Route path="/makeadmin" element={<MakeAdmin />}></Route>
        <Route
          path="/:shortname"
          element={
            <RequireAuth>
              <Workspace />
            </RequireAuth>
          }
        >
          <Route path="/:shortname/" element={<Boards />}></Route>
          <Route path="/:shortname/members" element={<Members />}>
            <Route
              path="/:shortname/members"
              element={<WorkspaceMembers></WorkspaceMembers>}
            ></Route>
            <Route
              path="/:shortname/members/guests"
              element={<Guests></Guests>}
            ></Route>
            <Route
              path="/:shortname/members/pending"
              element={<Pending></Pending>}
            ></Route>
          </Route>
          <Route path="/:shortname/account" element={<Account />}></Route>
          <Route
            path="/:shortname/:id"
            element={<BoardDetails></BoardDetails>}
          ></Route>
        </Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>


        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
