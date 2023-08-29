import moment from 'moment';
import Image from 'next/image';
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
async function getData(id) {
    const res = await fetch(`https://tech-weave-backend.onrender.com/post/${id}`, { cache: 'no-store' })
    
    
    return res.json()
  }
const page = async({params}) => {
    const data = await getData(params.id)
    return (
        <div className='mx-auto w-full space-y-10'>
           <div className='badge badge-info text-white flex justify-center mx-auto'>{data?.category}</div>

           <h1 className='text-center mx-auto text-4xl max-w-screen-lg font-bold'>{data?.title}</h1>

           <div className='mx-auto flex justify-center space-x-4 items-center'>

            <img className='object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500 ' src= {data?.photo} alt="" />
            <p className='text-lg font-bold'>{data?.name}</p>
            <p className='flex items-center'> <FaCalendarAlt className='mr-3'></FaCalendarAlt>
                                <small>{moment(data?.created_at).format('D-MM-yy')}</small></p>           </div>


           <img src= {data?.postImage} alt="" className='max-w-screen-lg max-h-96 mx-auto' />


           <p className='whitespace-pre-line  max-w-screen-lg mx-auto' >


            {data?.description}
           </p>
            
        </div>
    );
};

export default page;