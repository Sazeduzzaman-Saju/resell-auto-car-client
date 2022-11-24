import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    console.log(categories)
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-3 col-sm-1'>
                        <h3 className='mt-3 mb-5'>Car Categories</h3>
                        {
                            categories.map(category => <p key={category.id}>
                                <Link to={`/category/${category.id}`}>{category.name}</Link>
                            </p>)
                        }
                    </div>
                    <div className='col-lg-9 col-md-9 col-sm-1'>
                        <h1>data</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;