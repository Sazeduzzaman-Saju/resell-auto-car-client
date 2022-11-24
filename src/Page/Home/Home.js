import React from 'react';
import useWebTitle from '../../hooks/useWebTItle/useWebTitle';
import Banner from './Banner/Banner';
import Welcome from './Welcome/Welcome';

const Home = () => {
    useWebTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
        </div>
    );
};

export default Home;