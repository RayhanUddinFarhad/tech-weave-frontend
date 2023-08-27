
'use client'

import React, { useContext } from 'react';
import Lottie, { LottiePlayer } from "lottie-react";
import { AuthContext } from '@/context/AuthProvider';
import { FaUsers } from 'react-icons/fa';
import { FcLike, FcLineChart, FcSurvey } from "react-icons/fc";


const UserDashboard = () => {
    const {user} = useContext(AuthContext)
    return (
        <>


        <div className='grid lg:grid-cols-3 gap-3 p-5'>

            <div className='col-span-2'>


                <div className='shadow p-5 max-w-screen-lg rounded-xl '>
                <div className=' space-y-5'>
                    <h1 className='text-4xl font-bold'>Hello <span className='text-gradient-primary'> {user?.displayName}</span></h1>
                    <p className='text-lg font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, provident.</p>
                    <button className='button-primary rounded-lg'>Write a post</button>


                </div>

                
                </div>


                <div className='grid lg:grid-cols-3 my-5 gap-5'>
                    <div className='flex items-center justify-center py-2 px-0 gap-3 shadow rounded-lg'>
                       <p className='bg-[#e6f7f8] py-3 px-1 rounded-lg'>

                       <FaUsers className='w-10 text-teal-500'></FaUsers>
                       </p>

                        <div >
                            <h1 className='font-extrabold'>14,200</h1>
                            <p className='text-sm'>Followers</p>
                        </div>

                    </div>
                    <div className='flex items-center justify-center py-2  gap-3 shadow rounded-lg'>
                       <p className='bg-[#ffdebe] py-3 px-1 rounded-lg'>

                       <FcSurvey className='w-10 text-teal-500'></FcSurvey>
                       </p>

                        <div >
                            <h1 className='font-extrabold'>150</h1>
                            <p className='text-sm'>Post</p>
                        </div>

                    </div>
                    <div className='flex items-center justify-center p-1 gap-3 shadow rounded-lg'>
                       <p className='bg-[##ffedf0] py-3 px-1 rounded-lg'>

                       <FcLike className='w-10 text-teal-500'></FcLike>
                       </p>

                        <div >
                            <h1 className='font-extrabold'>140k</h1>
                            <p className='text-sm'>Likes</p>
                        </div>

                    </div>
                    <div className='flex items-center justify-center p-3 gap-3 shadow rounded-lg'>
                       <p className='bg-[#ecf4fe] py-3 px-1 rounded-lg'>

                       <FcLineChart className='w-10 text-teal-500'></FcLineChart>
                       </p>

                        <div >
                            <h1 className='font-extrabold'>893k</h1>
                            <p className='text-sm'>Viewers</p>
                        </div>

                    </div>
                    
                </div>
            </div>


        </div>
        
        
        </>
    );
};

export default UserDashboard;