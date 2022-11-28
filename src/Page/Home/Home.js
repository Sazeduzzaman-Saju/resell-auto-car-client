import React from 'react';
import useWebTitle from '../../hooks/useWebTItle/useWebTitle';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import AllProduct from './AllProduct/AllProduct';
import Banner from './Banner/Banner';
import SellerPost from './SellerPost/SellerPost';
import Steps from './Steps/Steps';
import Welcome from './Welcome/Welcome';

const Home = () => {
    useWebTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <AdvertisedItems></AdvertisedItems>
            <SellerPost></SellerPost>
            <AllProduct></AllProduct>
            <Steps></Steps>
        </div>
    );
};

export default Home;