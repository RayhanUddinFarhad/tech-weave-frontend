'use client'
import Modal from '@/components/modals/Modal';
import { AuthContext } from '@/context/AuthProvider';
import useMyPost from '@/hooks/useMyPost';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import moment from 'moment/moment';
import React, { useContext, useState } from 'react';

const MyPosts = () => {
    const [selectedItemId, setSelectedItemId] = useState(null); // State to track the selected item's ID


    const { user } = useContext(AuthContext)


    const { isLoading, error, data: myposts = [], refetch } = useQuery({
        queryKey: ['myposts'],
        queryFn: () =>
            fetch(`https://tech-weave-backend.onrender.com/my-post/${user?.email}`).then((res) =>
                res.json()

            
            ),
    });

    const handleEdit = (id) => {
        setSelectedItemId(id); // Set the selected item's ID when the "Edit" button is clicked
    };



    const handleDelete = (id) => {

        axios.delete(`https://tech-weave-backend.onrender.com/post/${id}`)
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
                
               {

                myposts.length <=0 ? <h1 className='text-5xl font-extrabold text-error p-10'>You have no post yet!</h1> :  <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Photo</th>
                            <th className="py-3 px-6">title</th>
                            <th className="py-3 px-6">Category</th>
                            <th className="py-3 px-6">status</th>
                            <th className="py-3 px-6">Date</th>
                            <th className="py-3 px-6"></th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            myposts?.map((item, idx) => (
                                <>



                                    <tr key={idx}>
                                        <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                            <img src={item?.postImage} className="w-10 h-10 rounded-full" />

                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item?.title.slice(0,7)} ..</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item?.category}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-2 rounded-full font-semibold text-xs ${item.status == "approved" ? "text-green-600 bg-green-50"  : "text-white bg-red-400"} `}>
                                            {item.status}
                                        </span>
                                    </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <small>{moment(item?.created_at).format('D-MM-yyy')}</small>
                                        </td>

                                        <td className="text-right px-6 whitespace-nowrap">




                                            <label 
                                             onClick={() => handleEdit(item?._id)} className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg" htmlFor="my_modal_6" >

                                                Edit
                                            </label>

                                            <button onClick={() => handleDelete(item?._id)} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                    <Modal id={selectedItemId} 
                                    refetch = {refetch}


                                    ></Modal>

                                </>

                            ))

                        }
                    </tbody>
                </table>
            </div>
               }
            </div>




        </>
    );
};

export default MyPosts;