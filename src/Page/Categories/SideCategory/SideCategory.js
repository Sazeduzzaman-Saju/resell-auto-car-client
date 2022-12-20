import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './SideCategory.css'

const SideCategory = () => {
    const [category, setCategory] = useState([]);

    const url = 'https://resell-autocar-server.vercel.app/carCategories'
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
                    <NavLink to={`/carsCategories/category/${name.slug}`} style={{ textDecoration: 'none' }}>

                        <div className='btn from-top d-flex justify-content-between menu-link'>
                            <div>
                                <span className="">{name.name}</span>
                            </div>
                            <span><FaLongArrowAltRight></FaLongArrowAltRight></span>
                        </div>

                    </NavLink>
                </p>)
            }
        </div>
    );
};

export default SideCategory;