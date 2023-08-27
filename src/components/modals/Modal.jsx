import { AuthContext } from '@/context/AuthProvider';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

const Modal = ({ id, title, description, category, postImage, refetch }) => {
    const { register, handleSubmit } = useForm(); // Initialize react-hook-form

const [updated , setUpdated] = useState(false)

    const onSubmit = async (data) => {











        axios.put(`http://localhost:5000/update-post/${id}`, {

            title: data?.title,
            description: data?.description,
            category: data?.category,
            postImage: data?.photo,





        })
            .then(res => {
                console.log(res);
                refetch()
                setUpdated(true)
            })
            .catch(error => {
                console.log(error);

            })





    };
    return (
        <>


            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <main className="w-full p-5 flex flex-col items-center justify-center bg-gray-50 sm:px-4">
                        <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                            <div className="text-center">
                                <div className="mt-5 space-y-2">
                                    <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Update your post</h3>
                                </div>
                            </div>
                            <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <label className="font-medium">Title</label>
                                        <input
                                            {...register('title')}
                                            type="text"
                                            defaultValue={title}
                                            placeholder='What is web development?'
                                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <label className="font-medium">Description</label>
                                        <textarea
                                            defaultValue={description}
                                            {...register('description')}
                                            type="text"
                                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-indigo-600 shadow-sm rounded-lg textarea h-36"
                                        />
                                    </div>
                                    <div>
                                        <label className="font-medium">Category</label>
                                        <select
                                            defaultValue={category}
                                            {...register('category')}
                                            className="select select-bordered w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                        >
                                            <option selected disabled>Select a category</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Programming Career">Programming Career</option>
                                            <option value="Machine Learning">Machine Learning</option>
                                            <option value="Programming Language">Programming Language</option>
                                            <option value="Motivational">Motivational</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="font-medium">Upload photo</label>
                                        <input
                                            {...register('photo')}
                                            type="text"
                                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                            placeholder='photo URL'
                                        />
                                    </div>
                                    {
                                        updated ? <button
                                        disabled
                                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                                    >
Updated                                    </button> : <button
                                        type="submit"
                                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                                    >
                                        Post
                                    </button>
                                    }
                                </form>
                            </div>
                        </div>
                    </main>

                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div></>
    );
};

export default Modal;