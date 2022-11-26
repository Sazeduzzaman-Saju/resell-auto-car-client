import React, { useContext } from 'react';
import './SingleCarService.css';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import PrimaryButton from '../../../comps/PrimaryButton/PrimaryButton';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';


const SingleCarService = ({ carService }) => {
    const { user } = useContext(AuthContext)
    const { _id, title, img, condition, slug, price, negotiable_price } = carService;
    console.log(_id, title, price, img)


    const handleWishListSubmit = () => {
        const addWishList = {
            wishListIid: _id,
            product_img: img,
            product_title: title,
            price: price,
            email: user?.email
        }

        fetch(`http://localhost:5000/wishlist`, {
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
        <div class="">
            <div class="card border-0 shadow-lg">
                <span class="percent">{condition}</span>
                <div class="card-image ">
                    <img src={img} className="img-fluid service-car-img" alt='' />
                </div>
                <div class="card-inner">
                    <span className=''>{slug.toUpperCase()}</span>
                    <h5 class="mb-0">{title.slice(0, 20)}</h5>
                    <div class="price mt-3 ">
                        <span>${price}</span>
                        <sup className='primary-bg text-white rounded-pill p-1 ms-1 shadow-lg text-end'>{negotiable_price ? <>Fixed</> : <>NEG</>}</sup>
                    </div>
                    <div class="mt-3 d-flex justify-content-between align-items-center">
                        <NavLink to={`/carsCategories/carDetails/${_id}`} style={{ textDecoration: 'none' }}>
                            <PrimaryButton>Details</PrimaryButton>
                        </NavLink>
                        <div class="d-flex flex-row">
                            <span onClick={handleWishListSubmit} class="wishlist"><FaHeart></FaHeart></span>
                            <Link to={`/carsCategories/add-to-cart/${_id}`}>
                                <span class="cart"><FaShoppingCart></FaShoppingCart></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCarService;