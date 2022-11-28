import React from 'react';
import { TiStarFullOutline } from "react-icons/ti";

const SingleProductHome = ({ post }) => {
    const { title, img, slug, price } = post;
    return (
        <div className='item mt-5 shadow p-3 mt-5 mb-5 ms-2 me-2 rounded'>
            <p>{title}</p>
            <div className='d-flex justify-content-start align-items-center'>
                <img style={{ width: "50px", height: "50px" }} className="rounded-circle border border-info border-4" alt="50x50"
                    src={img} data-holder-rendered="true" />
                <div className='ms-3'>
                    <p className='m-0 fw-bold primary-color'>{slug}</p>
                    <p className='m-0'>{price}</p>
                    <p className='text-info'>
                        <TiStarFullOutline></TiStarFullOutline>
                        <TiStarFullOutline></TiStarFullOutline>
                        <TiStarFullOutline></TiStarFullOutline>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleProductHome;