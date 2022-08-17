import { Route, Routes } from "react-router-dom";
import Login from "./components/firebase/Login";
import Register from "./components/firebase/Register";
import Home from "./components/Home";
import Navbar from "./components/shared/Navbar";
import { ToastContainer } from "react-toastify";
import RequierAuth from "./components/requierAuth/RequierAuth";
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

function App() {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    <Loading></Loading>;
  }
  return (
    <div className="#F5F5F5">
      {/* <ToastContainer /> */}
      {user && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <RequierAuth>
              <Home />
            </RequierAuth>
          }
        >
          <Route path="/" element={<Board />}></Route>
          <Route path="/template" element={<Template />}></Route>
          <Route path="/homescreen" element={<HomeScreen />}></Route>
        </Route>
        <Route path="/:shortname" element={<Workspace />}>
          <Route path="/:shortname/" element={<Boards />}></Route>
          <Route path="/:shortname/members" element={<Members />}></Route>
          <Route path="/:shortname/account" element={<Account />}></Route>
          <Route path="/:shortname/:id" element={<BoardDetails></BoardDetails>}></Route>
        </Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/profile" element={<Profiles />}>
          <Route path="/profile/" element={<ProfileValidity></ProfileValidity>}></Route>
          <Route path='profileActive' element={<ProfileActive></ProfileActive>}></Route>
          <Route path='profileCard' element={<ProfileCard></ProfileCard>}></Route>
          <Route path='profileSettings' element={<ProfileSetting></ProfileSetting>}></Route>
        </Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
