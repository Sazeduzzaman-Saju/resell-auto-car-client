import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import CategoriesDetails from './CategoriesDetails/CategoriesDetails';

const Categories = () => {
    const [carsName, setCarName] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/carCategories')
            .then(res => res.json())
            .then(data => setCarName(data))
    }, [])
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-3 col-sm-1'>
                        <h3 className='mt-3 mb-5'>Car Categories</h3>
                        {/* className='btns' style={{ width: "100%" }} */}
                        {
                            carsName.map(name => <p key={name._id}>
                                <Link to={`/car-categories/${name.category_id}`}>
                                    <button className='btns' style={{ width: "100%" }}>{name.name}</button>
                                </Link>

                            </p>)
                        }
                    </div>
                    <div className='col-lg-9 col-md-9 col-sm-1 ' >
                        <CategoriesDetails></CategoriesDetails>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Categories;