import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideCategory = () => {
    const [category, setCategory] = useState([]);

    const url = 'http://localhost:5000/carCategories'
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setCategory(response.data)
            })
    }, [])
    return (
        <div>
            {
                category.map(name => <p key={name._id}>
                    <Link to={`/carsCategories/category/${name.slug}`}>
                        <button className='btns' style={{ width: "100%" }}>{name.name}</button>
                    </Link>
                </p>)
            }
        </div>
    );
};

export default SideCategory;