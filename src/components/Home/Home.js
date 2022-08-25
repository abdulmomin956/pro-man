import React from 'react';
import Banner from './Banner';
import HomeNav from './HomeNav';
import Info from './Info';

const Home = () => {
    return (
        <div>
            <HomeNav></HomeNav>
            <Banner />
            <Info></Info>
        </div>
    );
};

export default Home;