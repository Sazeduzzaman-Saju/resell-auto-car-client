import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../comps/PrimaryButton/PrimaryButton';
import { AuthContext } from '../../../context/AuthProvider';

const SellerProduct = () => {
    const { user } = useContext(AuthContext)

    const url = `https://autocar-two.vercel.app/cars/seller/${user?.email}`;
    const { data: sellerPost = [] } = useQuery(
        ['sellerpost', user?.email],
        async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }, {
        refetchInterval: 1000,
    })

    return (
        <div>
            <p>All my product {sellerPost.length}</p>
            <div>
                {
                    sellerPost.map(post => <div
                        class="card border-0 shadow-lg" style={{ width: '18rem' }}>
                        <span class="percent">{post.condition}</span>
                        <div class="card-image ">
                            <img src={post.img} className="img-fluid service-car-img" alt='' />
                        </div>
                        <div class="card-inner">
                            <span className=''>{post.slug.toUpperCase()}</span>
                            <h5 class="mb-0">{post.title.slice(0, 20)}</h5>
                            <div class="price mt-3 ">
                                <span>${post.price}</span>
                                <sup className='primary-bg text-white rounded-pill p-1 ms-1 shadow-lg text-end'>{post.negotiable_price ? <>Fixed</> : <>NEG</>}</sup>
                            </div>
                            <div class="mt-3 d-flex justify-content-between align-items-center">
                                <Link to={`/carsCategories/carDetails/${post._id}`} style={{ textDecoration: 'none' }}>
                                    <PrimaryButton>Details</PrimaryButton>
                                </Link>
                                <div class="d-flex flex-row">
                                    {/* <span onClick={handleWishListSubmit} class="wishlist"><FaHeart></FaHeart></span> */}

                                    <Link to={`/carsCategories/add-to-cart/${post._id}`}>
                                        <span class="cart"><FaShoppingCart></FaShoppingCart></span>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SellerProduct;