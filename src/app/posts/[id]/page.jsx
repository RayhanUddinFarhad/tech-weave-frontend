'use client'
import PostCompo from '@/components/PostCompo';
import { AuthContext } from '@/context/AuthProvider';
import axios from 'axios';
import moment from 'moment';
import Image from 'next/image';
import React, { useContext } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

async function getData(id) {
    const res = await fetch(`https://tech-weave-backend.onrender.com/post/${id}`, { cache: 'no-store' })
    
    
    return res.json()
  }
const page = async({params}) => {
    const data = await getData(params.id)

    


    return (
        <>
        
        <PostCompo data = {data}></PostCompo>
        </>
    );
};

export default page;