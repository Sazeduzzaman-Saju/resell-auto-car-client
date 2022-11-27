import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Table from 'react-bootstrap/Table';
import toast from 'react-hot-toast';

const DashBoard = () => {
    const { user } = useContext(AuthContext);
    const url = `https://autocar-two.vercel.app/wishlist?email=${user?.email}`;
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
        fetch(`https://autocar-two.vercel.app/wishlist/${id}`, {
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
                <h1>My Booking</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishlist.length && wishlist?.map((list, i) => <tr
                            key={user._id}
                            className=""
                        >
                            <td>{i + 1}</td>
                            <td><img src={list.product_img} className="img-fluid rounded-circle" alt="" style={{ width: "60px", height: "60px" }} /></td>
                            <td>{list.product_title}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className='m-btn'><small>not</small></button>
                            </td>
                            <td>
                                <button onClick={() => handleRemove(list._id)} className='m-btn'>
                                    <small>remove</small>
                                </button>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </div >
    );
};

export default DashBoard;