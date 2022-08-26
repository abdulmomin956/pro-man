import React from 'react';
import Banner from './Banner';
import HomeNav from './HomeNav';
import Info from './Info';
import WorkFieldDemo from './WorkFieldDemo';

const Home = () => {
    return (
        <div>
            <HomeNav></HomeNav>
            <Banner />
            <Info></Info>
            <WorkFieldDemo></WorkFieldDemo>
        </div>
    );
};

export default Home;