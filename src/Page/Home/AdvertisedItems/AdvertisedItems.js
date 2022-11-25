import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryData from '../CategoryData/CategoryData';

const AdvertisedItems = () => {
    const [category, setCategory] = useState([]);
    console.log(category)
    const url = 'http://localhost:5000/carCategories'
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setCategory(response.data)
            })
    }, [])

    return (
        <div>
            <div className='container'>
                <div className='border-start'>
                    <div className='text-start mt-5 ms-2' data-aos="fade-left" data-aos-duration="3000">
                        <h1 class="main-block__title primary-color "><strong>Advertised Items</strong></h1>
                        <h6>Hot Collection</h6>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-2 col-md-2 col-sm-1'>
                        <h1>{category.length}</h1>
                        {
                            category.map(name => <p key={name._id}>
                                <Link to={`/category/${name.slug}`}>
                                    <button className='btns' style={{ width: "100%" }}>{name.name}</button>
                                </Link>
                            </p>)
                        }
                    </div>
                    <div className='col-lg-10 col-md-10 col-sm-1'>
                        {/* <CategoryData></CategoryData> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedItems;