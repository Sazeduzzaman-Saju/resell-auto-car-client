import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SellerSinglePost from './SellerSinglePost';

const SellerPost = () => {
    const url = 'https://autocar-two.vercel.app/seller/post';
    const { data: sellerPost = [], refetch } = useQuery(
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


    // const handleWishListSubmit = () => {
    //     const addWishList = {
    //         wishListIid: _id,
    //         product_img: img,
    //         product_title: title,
    //         price: price,
    //         email: user?.email
    //     }

    //     fetch(`https://autocar-two.vercel.app/wishlist`, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(addWishList)
    //     }).then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             refetch();
    //         })
    //         .catch(error => console.error(error))

    // }


    return (
        <div>
            <div className='container mt-5'>
                <div className='border-start'>
                    <div className='text-end mt-5 ms-2' data-aos="fade-left" data-aos-duration="3000">
                        <h1 class="main-block__title primary-color "><strong>Seller Collection</strong></h1>
                    </div>
                </div>
            </div>
            <div>
                {sellerPost.map(post => <SellerSinglePost
                    key={post._id}
                    post={post}
                ></SellerSinglePost>)}
            </div>
        </div>
    );
};

export default SellerPost;