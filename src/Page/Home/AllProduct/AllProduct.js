import React from 'react';
import './Allproduct.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useQuery } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';
import PrimaryButton from '../../../comps/PrimaryButton/PrimaryButton';


const AllProduct = () => {

    const url = 'https://autocar-two.vercel.app/cars';
    const { data: productData = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })


    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        navText: ["<", ">"],
        smartSpeed: 300,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 3,
            }
        },
    };


    return (
        <div className='container mt-5 mb-5'>
            <div className='row flex justify-content-center align-items-center'>
                <div className='col-lg-6 col-sm-1 text-start'>
                    <div>
                        <h1 className=''>Feature Product</h1>
                    </div>
                </div>
                <div className='col-lg-6 col-sm-1 text-end'>
                    <div>
                        {/* <img src={quote} className="w-25" alt="" /> */}
                    </div>
                </div>
            </div>
            <div>
                <OwlCarousel className="slider-items owl-carousel" {...options}>
                    {productData.map(post =>
                        <div key={post._id} className='item mt-5 mb-5  rounded'>

                            <div className="card border-0 shadow-lg">
                                <span className="percent">{post.condition}</span>
                                <div className="card-image ">
                                    <img src={post.img} className="img-fluid service-car-img" alt='' />
                                </div>
                                <div className="card-inner">
                                    <span className=''>{post.slug.toUpperCase()}</span>
                                    <h5 className="mb-0">{post.title.slice(0, 20)}</h5>
                                    <div className="price mt-3 ">
                                        <span>${post.price}</span>
                                        <sup className='primary-bg text-white rounded-pill p-1 ms-1 shadow-lg text-end'>{post.negotiable_price ? <>Fixed</> : <>NEG</>}</sup>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-between align-items-center">
                                        <NavLink to={`/carsCategories/carDetails/${post._id}`} style={{ textDecoration: 'none' }}>
                                            <PrimaryButton>Details</PrimaryButton>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}
                </OwlCarousel>
            </div>
        </div>
    );
};

export default AllProduct;