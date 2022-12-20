import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { DayPicker } from 'react-day-picker';
import { useQuery } from '@tanstack/react-query';
import { FcApproval } from "react-icons/fc";
import useWebTitle from '../../../hooks/useWebTItle/useWebTitle';




const UserProfile = () => {
    useWebTitle('My Profile')
    const { user } = useContext(AuthContext);
    console.log(user.metadata.creationTime)
    const [date, setDate] = useState(new Date());

    const url = `https://resell-autocar-server.vercel.app/users/${user?.email}`;
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
            <div className="container">
                <p>Your Personal Profile</p>
                <div>
                    {
                        singleUser.map(users =>
                            <div className="row mt-5">
                                <div className="col-lg-3 mt-5 d-flex ">
                                    <img title="profile image img-fluid" className="img-circle rounded img-responsive" src={users.photURL} alt='' />
                                    {users?.useVerify !== 'verified' ? <></> : <><span className="primary-color" >
                                        <FcApproval className='fs-2' ></FcApproval>
                                    </span></>}
                                </div>
                                <div className="col-lg-5">
                                    <div className="section ">
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
                                <div className="col-lg-4">
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