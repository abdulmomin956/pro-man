import React from 'react';
// import Navbar from './shared/Navbar';
import Sidebar from './Sidebar/Sidebar';

const Home = () => {
    return (
        <div className='px-11' style={{ backgroundColor: "#F5F5F5", zIndex: '0' }}>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Home;