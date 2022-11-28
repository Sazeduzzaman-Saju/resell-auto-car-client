import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useWebTitle from '../../../hooks/useWebTItle/useWebTitle';
import SingleCarService from '../../Categories/SingleCarService.js/SingleCarService';


const CategoryData = () => {
    const services = useLoaderData();
    useWebTitle('Cars Page')
    return (
        <div className='container mt-5 mb-5'>
            <p>Showing {services.length} Result of {services[0].slug.toUpperCase()}</p>
            <div className='car-container mt-5'>
                {services.map(carService => <SingleCarService
                    key={carService._id}
                    carService={carService}
                ></SingleCarService>)}
            </div>
        </div>
    );
};

export default CategoryData;