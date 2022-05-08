import React from 'react';
import Banner from '../Banner/Banner';
import Combo from './Combo/Combo';
import Gears from './Gears/Gears';
import HikingPackage from './HikingPackage/HikingPackage';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gears></Gears>
            <Combo></Combo>
            <HikingPackage></HikingPackage>

        </div>
    );
};

export default Home;