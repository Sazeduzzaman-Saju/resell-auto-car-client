import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PrimaryButton from '../../../comps/PrimaryButton/PrimaryButton';
import useWebTitle from '../../../hooks/useWebTItle/useWebTitle';
import './AddToCart.css';

const AddToCart = () => {
    useWebTitle('Product Check Out Page')
    const cartData = useLoaderData();
    const { _id, img, title, price, condition } = cartData;
    return (
        <div class="cart_section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="cart_container">
                            <div class="cart_title">Cart</div>
                            <div class="cart_items">
                                <ul class="cart_list">
                                    <li class="cart_item clearfix ">
                                        <div class="cart_item_image mt-3">
                                            <img src={img} alt="" />
                                        </div>
                                        <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between ">
                                            <div class="cart_item_name cart_info_col">
                                                <div class="cart_item_title text-center">Name</div>
                                                <div class="cart_item_text">{title}</div>
                                            </div>
                                            <div class="cart_item_color cart_info_col">
                                                <div class="cart_item_title text-center">Condition</div>
                                                <div class="cart_item_text primary-bg text-center text-white rounded">
                                                    {condition}
                                                </div>
                                            </div>

                                            <div class="cart_item_price cart_info_col">
                                                <div class="cart_item_title text-center">Price</div>
                                                <div class="cart_item_text">${price}</div>
                                            </div>
                                            <div class="cart_item_total cart_info_col">
                                                <div class="cart_item_title text-center">Total</div>
                                                <div class="cart_item_text">${price}</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="order_total primary-bg">
                                <div class="order_total_content text-md-right ">
                                    <div class="order_total_title text-white">Order Total:</div>
                                    <div class="order_total_amount">$ {price}</div>
                                </div>
                            </div>
                            <div class="cart_buttons d-flex justify-content-end">
                                <Link to={'/carsCategories'} style={{ textDecoration: 'none' }}>
                                    <PrimaryButton>Another Car</PrimaryButton>
                                </Link>
                                <div className="ms-2">
                                    <Link to={`/dashboard/payment/${_id}`}>
                                        <PrimaryButton>PAYMENT</PrimaryButton>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;