import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportedPost = () => {
    const url = `https://autocar-two.vercel.app/reportedpost`;
    const { data: reportedPost = [] } = useQuery(
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


    return (
        <div>
            <h1>This is Reported{reportedPost.length}</h1>
        </div>
    );
};

export default ReportedPost;