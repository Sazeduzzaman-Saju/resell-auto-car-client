import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Table from 'react-bootstrap/Table';

const DashBoard = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const url = `http://localhost:5000/wishlist?email=${user?.email}`;
    const { data: wishlist = [] } = useQuery({
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
                                <button className='m-btn'><small>Admin</small></button>
                            </td>
                            <td>
                                <button className='m-btn'><small>Remvoe</small></button>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default DashBoard;