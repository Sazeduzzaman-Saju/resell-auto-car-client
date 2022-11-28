import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import useWebTitle from '../../../hooks/useWebTItle/useWebTitle';
import './ReportedPost.css';

const ReportedPost = () => {
    useWebTitle('Reported Post')
    const url = `https://autocar-two.vercel.app/reportedpost`;
    const { data: reportedPost = [], refetch } = useQuery(

        ['reported-post'],
        async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('access_token')}`
                }
            });
            const data = await res.json();
            return data;
        }, {
        refetchInterval: 1000,
    })



    const handleRemove = id => {
        fetch(`https://autocar-two.vercel.app/reportedpost/${id}`, {
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
        <div className='container'>
            <p>Available Reported Data {reportedPost.length} Result of {reportedPost.length}</p>
            <div className='reported-post-container'>
                {
                    reportedPost.map(report => <div
                        class="card" style={{ width: '18rem ' }}>
                        <img src={report.product_img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{report.product_title}</h5>
                            <div className='d-flex justify-content-center align-items-center mb-3'>
                                <img style={{ width: "40px", borderRadius: '50%' }} className="rounded-circle" src={report.userPhoto} class="card-img-top" alt="..." />
                                <div class="ms-3">
                                    <p class="p-0 m-0 fw-bold">{report.userName}</p>
                                    <p class="p-0 m-0">{report.userComment}</p>
                                </div>
                            </div>
                            <button onClick={() => handleRemove(report._id)} class="btns">Remove Now</button>
                        </div>
                    </div>)
                }
            </div>
        </div >
    );
};

export default ReportedPost;