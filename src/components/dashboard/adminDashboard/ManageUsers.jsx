'use client'
import useUsers from '@/hooks/useUsers';
import axios from 'axios';
import React, { useEffect } from 'react';
import useSWR from 'swr'

const ManageUsers = () => {

    const [users, refetch] = useUsers()
   



    const handlemakeAdmin = (email) => {

        axios.patch (`https://tech-weave-backend.onrender.com/change-role/${email}`)
    .then (res => {
        console.log(res);
        refetch()
    })
    .catch (err => {

        console.log(err);
    })


    }





    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="items-start justify-between md:flex">
            <div className="max-w-lg">
                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mt-5">
                    Manage Users 
                </h3>
                
            </div>
            
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
                <thead className=" text-gray-600 font-medium border-b">
                    <tr>
                        <th className="py-3 px-6">Username</th>
                        <th className="py-3 px-6">Status</th>
                        <th className="py-3 px-6"></th>

                    </tr>
                </thead>
                <tbody className="text-gray-600 divide-y">
                    {
                        users?.map((item, idx) => (
                            <tr key={idx}>
                                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                    <img src={item.photo} className="w-10 h-10 rounded-full" />
                                    <div>
                                        <span className="block text-gray-700 text-sm font-medium">{item.name}</span>
                                        <span className="block text-gray-700 text-xs">{item.email}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{item?.role}</td>
                                <td className="text-right px-6 whitespace-nowrap">
                                    <button onClick={() => handlemakeAdmin(item?.email)} className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                        Make admin
                                    </button>
                                    <button className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                        Ban user
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ManageUsers;