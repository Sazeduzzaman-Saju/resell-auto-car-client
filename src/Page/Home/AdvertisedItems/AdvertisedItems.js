import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HotCollection.css'

const AdvertisedItems = () => {
    const [category, setCategory] = useState([]);
    console.log(category)
    const url = 'https://autocar-two.vercel.app/carCategories'
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setCategory(response.data)
            })
    }, [])

    return (
        <div>
            <div className='container mt-5'>
                <div className='border-start'>
                    <div className='text-start mt-5 ms-2' data-aos="fade-left" data-aos-duration="3000">
                        <h1 className="main-block__title primary-color "><strong>Brand Collection</strong></h1>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='hot-collection' data-aos="fade-up-left" data-aos-duration="1500">
                        {
                            category.map(name => <p key={name._id}>
                                <Link to={`/carsCategories/category/${name.slug}`}>
                                    <div className="hot-box">
                                        <img className='p-3' src={name.brand_img} alt='' style={{ height: "150px" }} />
                                        <div className="hot-box-content">
                                            <div className="content">
                                                <h3 className="title">{name.name}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </p>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedItems;