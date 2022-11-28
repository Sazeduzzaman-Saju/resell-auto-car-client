import React from 'react';
import './Allproduct.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useQuery } from '@tanstack/react-query';

import { NavLink } from 'react-router-dom';
import PrimaryButton from '../../../comps/PrimaryButton/PrimaryButton';
import SingleProductHome from './SingleProductHome';

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

    const testimonialData = [
        {
            id: 1,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",

            authorName: 'Tommy Loafer',
            country: "Australia",
        },
        {
            id: 2,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",

            authorName: 'Jimmi Nisham',
            country: "USA",
        },
        {
            id: 3,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",

            authorName: 'Tonmoy Barua',
            country: "Russia",
        },
        {
            id: 4,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",

            authorName: 'Jelly Hudson',
            country: "China",
        },
        {
            id: 5,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",

            authorName: 'Jeson Root',
            country: "California",
        },
    ];
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
                        <h1 className=''>Some Feature Product{productData.length}</h1>
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
                    {productData.map(post => <div className='item mt-5 shadow p-3 mt-5 mb-5 ms-2 me-2 rounded'>
                        <p>{post.title}</p>
                        <div className='d-flex justify-content-start align-items-center'>
                            <img style={{ width: "50px", height: "50px" }} className="rounded-circle border border-info border-4" alt="50x50"
                                src={post.img} data-holder-rendered="true" />
                            <div className='ms-3'>
                                <p className='m-0 fw-bold primary-color'>{post.slug}</p>
                                <p className='m-0'>{post.price}</p>
                            </div>
                        </div>
                    </div>)}
                </OwlCarousel>
            </div>
        </div>
    );
};

export default AllProduct;