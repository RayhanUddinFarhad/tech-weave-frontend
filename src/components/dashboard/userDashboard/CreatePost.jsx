'use client'
import { AuthContext } from '@/context/AuthProvider';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const CreatePost = () => {
    const { register, handleSubmit, reset } = useForm(); // Initialize react-hook-form
    const {user} = useContext(AuthContext)
    const [posted, setPostd] = useState(false)
    const [error, setError] = useState('')
    const image_key = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_KEY}`;


    const onSubmit = async(data) => {
        const formdata = new FormData()

        formdata.append  ('image', data.photo[0])


        fetch (image_key, {

            method: 'POST',
            body: formdata
        })
        .then (res => res.json())
        .then (imageResponse => {

            if (imageResponse.success) {


                const imageURL = imageResponse?.data?.display_url

                console.log(imageURL);



            

                    axios.post(`https://tech-weave-backend.onrender.com/post`, {
                        name : user?.displayName,
                        email : user?.email,
                        photo : user?.photoURL,
                        title : data?.title,
                        description : data?.description,
                        category : data?.category,
                        postImage : imageURL,
                 




                })
                .then (res => {
                    console.log(res);
                    reset()
                    Swal.fire(
                        'Good job!',
                        'Your Post has been successfully uploaded! Wait for approve',
                        'success'
                      )                 })
                .catch (error  => {
                    console.log(error.message);
                    setError(error.message)

                })


                .catch (err => {


                    console.log(err.message);
                    setError(error.message)
                 })
             }
        })


    };
    return (
        <main className="w-full p-5 flex flex-col items-center justify-center bg-gray-50 sm:px-4">
        <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
            <div className="text-center">
                <div className="mt-5 space-y-2">
                    <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create a post</h3>
                </div>
            </div>
            <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                    <p className='text-error'>{error}</p>
                    <div>
                        <label className="font-medium">Title</label>
                        <input
                            {...register('title', { required: true })}
                            type="text"
                            placeholder='What is web development?'
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">Description</label>
                        <textarea
                            {...register('description', { required: true })}
                            type="text"
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-indigo-600 shadow-sm rounded-lg textarea h-36"
                        />
                    </div>
                    <div>
                        <label className="font-medium">Category</label>
                        <select
                            {...register('category', { required: true })}
                            className="select select-bordered w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        >
                            <option  selected disabled>Select a category</option>
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
                            {...register('photo', { required: true })}
                            type="file"
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                   <button
                        type="submit"
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Post
                    </button>
                    
                </form>
            </div>
        </div>
    </main>
    );
};

export default CreatePost;