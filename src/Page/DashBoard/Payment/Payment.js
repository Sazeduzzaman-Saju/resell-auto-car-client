import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useWebTitle from '../../../hooks/useWebTItle/useWebTitle';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise)

const Payment = () => {
    useWebTitle('Payments')
    const data = useLoaderData();
    console.log('this is payment page', data)
    return (
        <div>
            <h1 className='text-center'>Payment </h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-1'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={data.product_img} alt="cap" />
                            <div className="card-body text-muted">
                                <h5 className="card-title">P. Name : {data.product_title}</h5>
                                <p className="card-text"><strong>Buyer Email :</strong> {data.email}</p>
                                <h3 className="">Price : $ {data.price}</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8 w-50 mt-5 col-md-6 col-sm-1'>
                        <div className=' shadow-lg p-5 mb-5 rounded '>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm
                                    data={data}
                                />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;