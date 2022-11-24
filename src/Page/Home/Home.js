import React from 'react';
import useWebTitle from '../../hooks/useWebTItle/useWebTitle';
import Banner from './Banner/Banner';

const Home = () => {
    useWebTitle('Home')
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;