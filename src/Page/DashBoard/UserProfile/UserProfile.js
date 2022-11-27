import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { DayPicker } from 'react-day-picker';
import { useQuery } from '@tanstack/react-query';
import { FcOk } from "react-icons/fc";
const UserProfile = () => {
    const { user } = useContext(AuthContext);
    console.log(user.metadata.creationTime)
    const [date, setDate] = useState(new Date());

    const url = `https://autocar-two.vercel.app/users/${user?.email}`;
    const { data: singleUser = [] } = useQuery(
        ['user', user?.email],
        async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }, {
        refetchInterval: 1000,
    })
    console.log(singleUser)
    return (
        <div>
            <div class="container">
                <p>Your Personal Profile</p>
                <div>
                    {
                        singleUser.map(users =>
                            <div class="row mt-5">
                                <div class="col-lg-3 mt-5 d-flex ">

                                    <a href="/users" class="pull-right">

                                        <img title="profile image" class="img-circle rounded img-responsive" src={users.photURL} alt='' />
                                    </a>
                                    {users?.useVerify !== 'verified' ? <></> : <><span class="primary-color" >
                                        <FcOk className='fs-2 primary-color' style={{ color: "red" }}></FcOk>
                                    </span></>}

                                </div>
                                <div class="col-lg-5">
                                    <div class="section ">
                                        <form>
                                            <label for="name" className='test-start fw-bold'>Name</label>
                                            <input
                                                defaultValue={users.name}
                                                className='form-style mb-2'
                                                readOnly
                                            />
                                            <label for="email" className='test-start fw-bold'>Email</label>
                                            <input
                                                defaultValue={users.email}
                                                className='form-style mb-2'
                                                readOnly
                                            />
                                            <label for="role" className='test-start fw-bold'>Role</label>
                                            <input
                                                defaultValue={users.role}
                                                className='form-style mb-2'
                                                readOnly
                                            />
                                            <label for="Joining Date" className='test-start fw-bold'>Joining Date</label>
                                            <input
                                                defaultValue={user.metadata.creationTime}
                                                placeholder="Inter Your Password"
                                                className=' form-style'
                                            />
                                        </form>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <DayPicker
                                        className='shadow-lg rounded p-3'
                                        mode="single"
                                        date={date}
                                        onSelect={setDate}
                                    />

                                </div>
                            </div>
                        )}
                </div>

            </div>
        </div >
    );
};

export default UserProfile;