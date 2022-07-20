import { Route, Routes } from "react-router-dom";
import Login from "./components/firebase/Login";
import Register from "./components/firebase/Register";
import Home from "./components/Home";
import Navbar from "./components/shared/Navbar";
import { ToastContainer } from 'react-toastify';
import RequierAuth from "./components/requierAuth/RequierAuth";
import auth from "./components/firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";



function App() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="#F5F5F5">
      <ToastContainer />
      {user && <Navbar />}

      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/" element={<RequierAuth><Home /></RequierAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

      </Routes>
    </div>
  );
}

export default App;
