import React, { useContext } from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import PrimaryButton from '../../../comps/PrimaryButton/PrimaryButton';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const SingleCategoryData = ({ car }) => {
    const { user } = useContext(AuthContext)
    const { _id, title, img, condition, slug, price, negotiable_price } = car;

    const handleWishListSubmit = () => {


        const addWishList = {
            wishListIid: _id,
            product_img: img,
            product_title: title,
            price: price,
            email: user?.email
        }
        console.log('addWishList', addWishList)
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
        <div>
            <div class="card border-0 shadow-lg">
                <span class="percent">{car.condition}</span>
                <div class="card-image ">
                    <img src={car.img} className="img-fluid service-car-img" alt='' />
                </div>
                <div class="card-inner">
                    <span className=''>{car.slug.toUpperCase()}</span>
                    <h5 class="mb-0">{car.title.slice(0, 20)}</h5>
                    <div class="price mt-3 ">
                        <span>${car.price}</span>
                        <sup className='primary-bg text-white rounded-pill p-1 ms-1 shadow-lg text-end'>{car.negotiable_price ? <>Fixed</> : <>NEG</>}</sup>
                    </div>
                    <div class="mt-3 d-flex justify-content-between align-items-center">
                        <Link to={`/carsCategories/carDetails/${car._id}`} style={{ textDecoration: 'none' }}>
                            <PrimaryButton>Details</PrimaryButton>
                        </Link>
                        <div class="d-flex flex-row">
                            <span onClick={handleWishListSubmit} class="wishlist"><FaHeart></FaHeart></span>
                            <Link to={`/carsCategories/add-to-cart/${car._id}`}>
                                <span class="cart"><FaShoppingCart></FaShoppingCart></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCategoryData;