import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Table from 'react-bootstrap/Table';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useWebTitle from '../../hooks/useWebTItle/useWebTitle';
import { FcEmptyTrash } from "react-icons/fc";

const DashBoard = () => {
    useWebTitle('Dashboard Home')
    const { user } = useContext(AuthContext);
    const url = `https://resell-autocar-server.vercel.app/wishlist?email=${user?.email}`;
    const { data: wishlist = [], refetch } = useQuery({
        queryKey: ['wishList', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('access_token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    const handleRemove = id => {
        fetch(`https://resell-autocar-server.vercel.app/wishlist/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success('Product Deleted')
                    refetch('')
                }
            })
    }
    return (
        <div>
            <div>
                <p className='fs-bold'>My Wishlist</p>

                <Table striped bordered hover>
                    <thead className='text-center'>
                        <tr className='text-white primary-bg'>
                            <th>SL</th>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Remove</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    {wishlist.length === 0 && <><h1 className='text-center'>No Data Found</h1></>}
                    {wishlist.length !== 0 && <><tbody className='text-center' >
                        {wishlist.length && wishlist?.map((list, i) => <tr
                            key={user._id}
                            className=""
                        >
                            <td>{i + 1}</td>
                            <td><img src={list.product_img} className="img-fluid rounded" alt="" style={{ width: "60px", height: "60px" }} /></td>
                            <td>{list.product_title}</td>
                            <td>{list.price}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => handleRemove(list._id)} className='btn'>
                                    <FcEmptyTrash className='fs-3'></FcEmptyTrash>
                                </button>
                            </td>
                            <td className='d-flex justify-content-center align-items-center'>
                                {
                                    list.price && !list.paid && <Link to={`/dashboard/payment/${list._id}`} style={{ textDecoration: "none" }}>
                                        <button className='m-btn'>Pay</button>
                                    </Link>
                                }
                                {
                                    list.price && list.paid &&
                                    <button className='btn btn-success'><small>Paid</small></button>

                                }
                            </td>

                        </tr>
                        )}
                    </tbody></>}

                </Table>
            </div>
        </div >
    );
};

export default DashBoard;