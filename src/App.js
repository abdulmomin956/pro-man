import { Route, Routes } from "react-router-dom";
import Login from "./components/firebase/Login";
import Register from "./components/firebase/Register";
import Home from "./components/Home";
import Navbar from "./components/shared/Navbar";
import { ToastContainer } from 'react-toastify';
import RequierAuth from "./components/requierAuth/RequierAuth";
import auth from "./components/firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Board from "./components/firstScreen/Board";
import HomeScreen from "./components/firstScreen/HomeScreen";
import Template from "./components/firstScreen/Template";
import Loading from "./components/shared/Loading";



function App() {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    <Loading></Loading>
  }
  return (
    <div className="#F5F5F5">
      <ToastContainer />
      {user && <Navbar />}

      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/" element={<RequierAuth><Home /></RequierAuth>}>
          <Route path="/" element={<Board />}></Route>
          <Route path="/template" element={<Template />}></Route>
          <Route path="/homescreen" element={<HomeScreen />}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

      </Routes>
    </div>
  );
}

export default App;
