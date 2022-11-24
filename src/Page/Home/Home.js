import React from 'react';
import useWebTitle from '../../hooks/useWebTItle/useWebTitle';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import Banner from './Banner/Banner';
import Steps from './Steps/Steps';
import Welcome from './Welcome/Welcome';

const Home = () => {
    useWebTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <AdvertisedItems></AdvertisedItems>
            <Steps></Steps>
        </div>
    );
};

export default Home;