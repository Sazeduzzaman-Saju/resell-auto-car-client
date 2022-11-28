import React, { useContext } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import PrimaryButton from '../../../comps/PrimaryButton/PrimaryButton';
import { AuthContext } from '../../../context/AuthProvider';

const SellerSinglePost = ({ post }) => {
    const { user } = useContext(AuthContext)
    const { _id, title, img, condition, slug, price, negotiable_price, displayName, photoURL, email } = post;
    console.log(_id, title, price, img);


    const handleWishListSubmit = () => {
        const addWishList = {
            wishListIid: _id,
            product_img: img,
            product_title: title,
            price: price,
            email: user?.email
        }

        fetch(`https://autocar-two.vercel.app/wishlist`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addWishList)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => console.error(error))

    }

    return (
        <div className='container'>
            <div className="card border-0 shadow-lg" style={{ width: "18rem" }}>
                <span className="percent">{condition}</span>
                <div className="card-image ">
                    <img src={img} className="img-fluid service-car-img" alt='' />
                </div>
                <div className="card-inner">
                    <span className=''>{slug.toUpperCase()}</span>
                    <h5 className="mb-0">{title.slice(0, 20)}</h5>
                    <div className="price mt-3 ">
                        <span>${price}</span>
                        <sup className='primary-bg text-white rounded-pill p-1 ms-1 shadow-lg text-end'>{negotiable_price ? <>Fixed</> : <>NEG</>}</sup>
                    </div>
                    <div className="mt-3 d-flex justify-content-between align-items-center">
                        <NavLink to={`/carsCategories/carDetails/${_id}`} style={{ textDecoration: 'none' }}>
                            <PrimaryButton>Details</PrimaryButton>
                        </NavLink>
                        <div className="d-flex flex-row">
                            <span onClick={handleWishListSubmit} className="wishlist"><FaHeart></FaHeart></span>


                            <Link to={'/dashboard'}>
                                <span onClick={handleWishListSubmit} className="cart"><FaShoppingCart></FaShoppingCart></span>
                            </Link>

                        </div>
                    </div>
                    <div>
                        <div className='d-flex  align-items-center mt-3'>
                            <img src={photoURL} className="rounded-circle" alt="" style={{ width: '40px' }} />
                            <div className='ms-3'>
                                <p className='m-0'>{displayName}</p>
                                <p className='m-0'>{email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerSinglePost;