import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCarService from '../../Categories/SingleCarService.js/SingleCarService';

const CategoryData = () => {
    const services = useLoaderData();
    return (
        <div>
            <h1>categories {services.length}</h1>
            {services.map(carService=> <SingleCarService
            key={carService._id}
                carService={carService}
            ></SingleCarService>)}
        </div>
    );
};

export default CategoryData;