import React from 'react';
// import Navbar from './shared/Navbar';
import Sidebar from './Sidebar/Sidebar';

const Home = () => {
    return (
        <div style={{ backgroundColor: "#F5F5F5", zIndex: '0' }}>
            {/* <Navbar></Navbar> */}
            {/* <h1>This is Home</h1> */}
            <Sidebar></Sidebar>
            <h2>home </h2>
        </div>
    );
};

export default Home;