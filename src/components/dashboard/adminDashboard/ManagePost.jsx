'use client'
import usePosts from '@/hooks/usePosts';
import axios from 'axios';
import React from 'react';

const ManagePost = () => {



    const [posts, refetch] = usePosts()


    const handleDelete = (id) => {

        axios.delete (`http://localhost:5000/post/${id}`)
        .then (res => {
            console.log(res);
            refetch()
        })
        .catch (err => {
            console.log(err);
        })


        
    }
    return (
        <>

            <div className='grid lg:grid-cols-1 gap-5'>


                {

                    posts?.map((post) => {
                        return (
                            <>

                                <div className="card card-side bg-base-100 shadow">
                                    <figure><img className='max-w-lg h-96' src= {post?.postImage} alt="Movie" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{post?.title}</h2>
                                        <p> {post?.description}</p>
                                        <p className='badge badge-success '>{post?.status}</p>
                                        <div className="card-actions justify-end">
                                            <button onClick={() => handleDelete(post?._id)} className="btn btn-error">Delete</button>
                                            <button className="btn btn-success">Approve</button>
                                        </div>
                                    </div>
                                </div></>
                        )
                    })
                }



            </div>


        </>
    );
};

export default ManagePost;