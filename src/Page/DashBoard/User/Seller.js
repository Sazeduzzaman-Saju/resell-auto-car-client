import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Table from 'react-bootstrap/Table';
import { FaCheckCircle } from "react-icons/fa";
import toast from 'react-hot-toast';


const Seller = () => {
    // const { user } = useContext(AuthContext)
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://autocar-two.vercel.app/user/seller`);
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


    const handleVerified = id => {
        fetch(`https://autocar-two.vercel.app/users/admin/verified/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Seller Verified')
                    refetch('')
                }
            })
    }

    const handleRemove = id => {
        fetch(`https://autocar-two.vercel.app/users/${id}`, {
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
            <h1>All Seller</h1>
            <Table striped bordered hover>
                <thead className='text-center'>
                    <tr >
                        <th>SL</th>
                        <th>Profile</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Make Admin</th>
                        <th>Remove Seller</th>
                        <th>Role</th>
                        <th>Verified</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {users.length && users?.map((user, i) => <tr
                        key={user._id}
                        className=""
                    >
                        <td>{i + 1}</td>
                        <td><img src={user.photURL} className="img-fluid rounded-circle" alt="" style={{ width: "60px", height: "60px" }} /></td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td className=''>
                            {user?.role !== 'admin' ? <><button onClick={() => handleAdmin(user._id)} className='m-btn'><small>Make Admin</small></button></> : <><FaCheckCircle className='text-success'></FaCheckCircle></>}




                        </td>
                        <td className='d-flex justify-content-center align-items-center'>
                            <button onClick={() => handleRemove(user._id)} className='m-btn'>
                                <small>remove</small>
                            </button>
                        </td>
                        <td >
                            <p className=''><small>{user?.role}</small></p>
                        </td>
                        <td className='d-flex justify-content-center align-items-center'>
                            {user?.useVerify !== 'verified' ? <><button onClick={() => handleVerified(user._id)} className='m-btn'><small>Verify</small></button></> : <><FaCheckCircle className='text-success'>Seller Verified</FaCheckCircle></>}
                        </td>
                    </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default Seller;