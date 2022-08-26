import React from 'react';
import Banner from './Banner';
import ChooseView from './ChooseView';
import HomeDetails from './HomeDetails';
import HomeFooter from './HomeFooter';
import HomeNav from './HomeNav';
import HomeSponcers from './HomeSponcers';
import Info from './Info';

import WorkFieldDemo from './WorkFieldDemo';

const Home = () => {
    return (
        <div>
            <HomeNav></HomeNav>
            <Banner />
            <Info></Info>
            <WorkFieldDemo></WorkFieldDemo>
            <HomeSponcers></HomeSponcers>
            <ChooseView></ChooseView>
            <HomeDetails></HomeDetails>
            <HomeFooter></HomeFooter>
        </div>
    );
};

export default Home;