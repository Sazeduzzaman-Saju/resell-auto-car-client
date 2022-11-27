import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Table from 'react-bootstrap/Table';
import { FaCheckCircle } from "react-icons/fa";
import toast from 'react-hot-toast';


const Buyer = () => {
    // const { user } = useContext(AuthContext)
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://autocar-two.vercel.app/user/buyer`);
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    const handleAdmin = id => {
        fetch(`https://autocar-two.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Admin Making Done')
                    refetch('')
                }
            })
    }
    return (
        <div>
            <h1>All Seller</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Profile</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Remove</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length && users?.map((user, i) => <tr
                        key={user._id}
                        className=""
                    >
                        <td>{i + 1}</td>
                        <td><img src={user.photURL} className="img-fluid rounded-circle" alt="" style={{ width: "60px", height: "60px" }} /></td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            {user?.role !== 'admin' ? <><button onClick={() => handleAdmin(user._id)} className='m-btn'><small>Make Admin</small></button></> : <><FaCheckCircle className='text-success'></FaCheckCircle></>}

                        </td>
                        <td>
                            <button className='m-btn'><small>Remvoe</small></button>
                        </td>
                        <td>
                            <button className='m-btn'><small>{user?.role}</small></button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default Buyer;