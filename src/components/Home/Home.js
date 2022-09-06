import React from 'react';
import Banner from './Banner';
import Features from './Features';
import HomeFooter from './HomeFooter';
import HomeNav from './HomeNav';
import HomeScreenShot from './HomeScreenShot';

import WorkFieldDemo from './WorkFieldDemo';

const Home = () => {
    return (
        <div>
            <HomeNav></HomeNav>
            <div className='bg-[#F9FAFC]'>
                <Banner />
                <WorkFieldDemo></WorkFieldDemo>
                <Features></Features>
                <HomeScreenShot></HomeScreenShot>
            </div>
            <HomeFooter></HomeFooter>
        </div>
    );
};

export default Home;