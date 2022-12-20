import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import useWebTitle from '../../../hooks/useWebTItle/useWebTitle';
import './ReportedPost.css';

const ReportedPost = () => {
    useWebTitle('Reported Post')
    const url = `https://resell-autocar-server.vercel.app/reportedpost`;
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
        fetch(`https://resell-autocar-server.vercel.app/cars/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('Reported Post  Deleted')
                    refetch('')

                }
            })
    }

    const reportHandleRemove = id => {
        fetch(`https://resell-autocar-server.vercel.app/reportedpost/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
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
                        className="card" style={{ width: '18rem ' }}>
                        <img src={report.product_img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{report.product_title}</h5>
                            <div className='d-flex justify-content-center align-items-center mb-3'>
                                <img style={{ width: "40px", borderRadius: '50%' }} className="rounded-circle card-img-top" src={report.userPhoto} alt="..." />
                                <div className="ms-3">
                                    <p className="p-0 m-0 fw-bold">{report.userName}</p>
                                    <p className="p-0 m-0">{report.userComment}</p>
                                    <p className="p-0 m-0">{report.reportPostId}</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <button onClick={() => handleRemove(report.reportPostId)} className="btns">Permanent Remove</button>
                                <button onClick={() => reportHandleRemove(report._id)} className="btns ms-3">Remove Report</button>
                            </div>

                        </div>
                    </div>)
                }
            </div>
        </div >
    );
};

export default ReportedPost;