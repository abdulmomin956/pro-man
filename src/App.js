import { Route, Routes } from "react-router-dom";
import Login from "./components/firebase/Login";
import Register from "./components/firebase/Register";
import Home from "./components/Home";
import Navbar from "./components/shared/Navbar";


function App() {
  return (
    <div className="#F5F5F5">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
