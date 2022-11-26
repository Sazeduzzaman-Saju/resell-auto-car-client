import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Table from 'react-bootstrap/Table';
import { FaCheckCircle } from "react-icons/fa";

const User = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data
        }
    })

    const handleAdmin = id => {
        alert('button clicked')
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            <h1>All User</h1>
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
                    {users.map((user, i) => <tr
                        key={user._id}
                        className=""
                    >
                        <td>{i + 1}</td>
                        <td><img src={user.photURL} className="img-fluid rounded-circle" alt="" style={{ width: "60px", height: "60px" }} /></td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            {user?.role ? <FaCheckCircle className='text-success'></FaCheckCircle> : <button onClick={() => handleAdmin(user._id)} className='m-btn'><small>Make Admin</small></button>}
                        </td>
                        <td>
                            <button className='m-btn'><small>Remvoe</small></button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default User;