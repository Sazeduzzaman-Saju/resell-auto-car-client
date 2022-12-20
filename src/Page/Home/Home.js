import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import useWebTitle from '../../hooks/useWebTItle/useWebTitle';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import AllProduct from './AllProduct/AllProduct';
import Banner from './Banner/Banner';
import SellerPost from './SellerPost/SellerPost';
import Steps from './Steps/Steps';
import Welcome from './Welcome/Welcome';
import PropagateLoader from "react-spinners/PropagateLoader";

const Home = () => {
    const { loading } = useContext(AuthContext)
    useWebTitle('Home')
    return (
        <div>
            {loading ?
                <>
                    <div className='container'>
                        <div className='row'>
                            <div className='col  d-flex justify-content-center align-items-center' style={{ height: "35rem" }}>
                                <PropagateLoader color="#36d7b7" />
                            </div>
                        </div>
                    </div>
                </>
                :
                <div>
                    <Banner></Banner>
                    <Welcome></Welcome>
                    <SellerPost></SellerPost>
                    <AllProduct></AllProduct>
                    <Steps></Steps>
                    <AdvertisedItems></AdvertisedItems>
                </div>}

        </div>
    );
};

export default Home;