'use client'
import usePosts from '@/hooks/usePosts';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';

const ManagePost = () => {



    const [posts, refetch] = usePosts()


    const handleReject = (id) => {

        axios.patch(`https://tech-weave-backend.onrender.com/reject-post/${id}`)
            .then(res => {
                console.log(res);
                refetch()
            })
            .catch(err => {
                console.log(err);
            })



    }
    const handleApprove = (id) => {

        axios.patch(`https://tech-weave-backend.onrender.com/post/${id}`)
            .then(res => {
                console.log(res);
                refetch()
            })
            .catch(err => {
                console.log(err);
            })



    }
    return (
        <>

<div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mt-10">
                        Manage All Posts
                    </h3>
                   
                </div>
            
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full  table-xs table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Username</th>
                            <th className="py-3 px-6">Status</th>
                            <th className="py-3 px-6">Date</th>
                            <th className="py-3 px-6"></th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            posts?.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                        <img src={item.postImage} className="w-10 h-10 rounded-full" />
                                        <div>
                                            <span className="block text-gray-700 text-sm font-medium">{item.name}</span>
                                            <span className="block text-gray-700 text-xs">{item.email}</span>
                                        </div>
                                    </td>
                                    <td className="pr-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-2 rounded-full font-semibold text-xs ${item.status == "approved" ? "text-green-600 bg-green-50"  : "text-white bg-red-400"} `}>
                                            {item.status}
                                        </span>
                                    </td>                                    <td className="px-6 py-4 whitespace-nowrap">{item.created_at}</td>
                                    <td className="text-right px-6 whitespace-nowrap">
                                        <button onClick={() => handleApprove(item?._id)}  className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Approve
                                        </button>
                                        <button  onClick={() => handleReject(item?._id)} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Decliene
                                        </button>

                                        <Link href={`/posts/${item._id}`} className='px-3 py-2 rounded-full font-semibold text-xs btn-secondary text-white'>
                                            Details
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>


        </>
    );
};

export default ManagePost;