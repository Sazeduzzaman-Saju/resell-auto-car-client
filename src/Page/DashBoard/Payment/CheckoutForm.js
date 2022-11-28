import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ data }) => {
    const { price, email, _id } = data;
    console.log(data)
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements()

    useEffect(() => {
        fetch("https://autocar-two.vercel.ap/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('access_token')}`
            },
            body: JSON.stringify({ price })
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error.message)
        } else {
            setCardError('')
        }

        setSuccess('');
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: email,
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            const paymentInfo = {
                price,
                transactionId: paymentIntent.id,
                email,
                wishListId: _id
            }
            fetch('https://autocar-two.vercel.ap/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('access_token')}`
                },
                body: JSON.stringify(paymentInfo)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    if (data.insertedId) {
                        setSuccess('Your Payment Successfully Done');
                        setTransactionId(paymentIntent.id)
                    }
                });
        }
        setProcessing(false)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='mt-5 text-center' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <div>
                <p className='text-danger'>{cardError}</p>
                {success && <>
                    <p>{success}</p>
                    <p>Your Transaction Id{transactionId}</p>
                </>}
            </div>
        </div>
    );
};

export default CheckoutForm;