import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
// import Navbar from './shared/Navbar';
import Sidebar from "./Sidebar/Sidebar";

export const AllTemplates = createContext();

const Home = () => {
  const [popularTemplates, setPopularTemplates] = useState([]);

  useEffect(() => {
    fetch("Templates/featuredData.json")
      .then((res) => res.json())
      .then((data) => setPopularTemplates(data));
  }, []);

  return (
    <AllTemplates.Provider value={{ popularTemplates: popularTemplates }}>
      <div className="max-w-[88rem] mx-auto">
        <Sidebar></Sidebar>
      </div>
    </AllTemplates.Provider>
  );
};

export default Home;
