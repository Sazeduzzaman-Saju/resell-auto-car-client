import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SellerSinglePost from './SellerSinglePost';

const SellerPost = () => {
    const url = 'https://autocar-two.vercel.app/seller/post';
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
        <div>
            <div className='container mt-5'>
                <div className='border-start'>
                    <div className='text-end mt-5 ms-2' data-aos="fade-left" data-aos-duration="3000">
                        <h1 className="main-block__title primary-color "><strong>Seller Collection</strong></h1>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="1500">
                {sellerPost.map(post => <SellerSinglePost
                    key={post._id}
                    post={post}
                ></SellerSinglePost>)}
            </div>
        </div>
    );
};

export default SellerPost;