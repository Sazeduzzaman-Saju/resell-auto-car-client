import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SellerSinglePost from './SellerSinglePost';
import './SellerPost'

const SellerPost = () => {
    const url = 'https://resell-autocar-server.vercel.app/seller/post';
    const { data: sellerPost = [] } = useQuery(
        ['sellerpost'],
        async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('access_token')}`
                }
            });
            const data = await res.json();
            return data;
        }, {
        refetchInterval: 1000,
    })

    console.log(sellerPost.length)

    return (
        <div className='container'>
            <div className='mt-5'>
                <div className=''>
                    <h1 className='text-end my-5'>Seller Collection</h1>
                </div>
            </div>
            <div className="">
                <div className="seller_car_container" data-aos="fade-up-left" data-aos-duration="1500">
                    {sellerPost.map(post => <SellerSinglePost
                        key={post._id}
                        post={post}
                    ></SellerSinglePost>)}
                </div>
            </div>
        </div>
    );
};

export default SellerPost;