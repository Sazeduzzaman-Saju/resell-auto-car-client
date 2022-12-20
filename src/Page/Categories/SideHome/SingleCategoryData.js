import React, { useContext } from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import PrimaryButton from '../../../comps/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const SingleCategoryData = ({ car }) => {
    const { user } = useContext(AuthContext)
    const { _id, title, img, price } = car;

    const handleWishListSubmit = () => {
        const addWishList = {
            wishListIid: _id,
            product_img: img,
            product_title: title,
            price: price,
            email: user?.email
        }
        console.log('addWishList', addWishList)
        fetch(`https://resell-autocar-server.vercel.app/wishlist`, {
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
            <div className="card border-0 shadow-lg">
                <span className="percent">{car.condition}</span>
                <div className="card-image ">
                    <img src={car.img} className="img-fluid service-car-img" alt='' />
                </div>
                <div className="card-inner">
                    <span className=''>{car.slug.toUpperCase()}</span>
                    <h5 className="mb-0">{car.title.slice(0, 15)}</h5>
                    <div className="price mt-3 ">
                        <span>${car.price}</span>
                        <sup className='primary-bg text-white rounded-pill p-1 ms-1 shadow-lg text-end'>{car.negotiable_price ? <>Fixed</> : <>NEG</>}</sup>
                    </div>
                    <div className="mt-3 d-flex justify-content-between align-items-center">
                        <Link to={`/carsCategories/carDetails/${car._id}`} style={{ textDecoration: 'none' }}>
                            <PrimaryButton>Details</PrimaryButton>
                        </Link>
                        <div className="d-flex flex-row">
                            <span onClick={handleWishListSubmit} className="wishlist"><FaHeart></FaHeart></span>

                            <Link to={`/dashboard`}>
                                <span onClick={handleWishListSubmit} className="cart"><FaShoppingCart></FaShoppingCart></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCategoryData;