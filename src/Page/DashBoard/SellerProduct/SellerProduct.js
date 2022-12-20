import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import useWebTitle from '../../../hooks/useWebTItle/useWebTitle';

const SellerProduct = () => {
    useWebTitle('My Product')
    const { user } = useContext(AuthContext)

    const url = `https://resell-autocar-server.vercel.app/cars/seller/${user?.email}`;
    const { data: sellerPost = [], refetch } = useQuery(
        ['sellerpost', user?.email],
        async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }, {
        refetchInterval: 1000,
    })

    const handleRemove = id => {
        fetch(`https://resell-autocar-server.vercel.app/seller/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Reported Post  Deleted')
                    refetch('')
                }
            })
    }


    return (
        <div>
            <p>All my product {sellerPost.length}</p>
            <div>
                {
                    sellerPost.map(post => <div
                        className="card border-0 shadow-lg" style={{ width: '18rem' }}>
                        <span className="percent">{post.condition}</span>
                        <div className="card-image ">
                            <img src={post.img} className="img-fluid service-car-img" alt='' />
                        </div>
                        <div className="card-inner">
                            <span className=''>{post.slug.toUpperCase()}</span>
                            <h5 className="mb-0">{post.title.slice(0, 20)}</h5>
                            <div className="price mt-3 ">
                                <span>${post.price}</span>
                                <sup className='primary-bg text-white rounded-pill p-1 ms-1 shadow-lg text-end'>{post.negotiable_price ? <>Fixed</> : <>NEG</>}</sup>
                            </div>
                            <div className="mt-3 d-flex justify-content-between align-items-center">

                                <button onClick={() => handleRemove(post._id)} className="btns">Remove Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SellerProduct;