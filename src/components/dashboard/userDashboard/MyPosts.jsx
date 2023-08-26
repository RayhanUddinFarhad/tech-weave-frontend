'use client'
import Modal from '@/components/modals/Modal';
import { AuthContext } from '@/context/AuthProvider';
import useMyPost from '@/hooks/useMyPost';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';

const MyPosts = () => {

    const { user } = useContext(AuthContext)


    const { isLoading, error, data: myposts = [], refetch } = useQuery({
        queryKey: ['myposts'],
        queryFn: () =>
            fetch(`http://localhost:5000/my-post/${user?.email}`).then((res) =>
                res.json()

            
            ),
    });



    const handleDelete = (id) => {

        axios.delete(`http://localhost:5000/post/${id}`)
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
                        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                            Team members
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>

                </div>
                <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                            <tr>
                                <th className="py-3 px-6">Photo</th>
                                <th className="py-3 px-6">title</th>
                                <th className="py-3 px-6">Category</th>
                                <th className="py-3 px-6">status</th>
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
                                            <td className="px-6 py-4 whitespace-nowrap">{item?.title}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{item?.category}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{item?.status}</td>
                                            <td className="text-right px-6 whitespace-nowrap">




                                                <label className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg" htmlFor="my_modal_6" >

                                                    Edit
                                                </label>

                                                <button onClick={() => handleDelete(item?._id)} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                        <Modal id={item?._id} title={item?.title}
                                            description={item?.description}
                                            category={item?.category}

                                            postImage={item?.postImage}
                                            refetch = {refetch}


                                        ></Modal>

                                    </>

                                ))

                            }
                        </tbody>
                    </table>
                </div>
            </div>




        </>
    );
};

export default MyPosts;