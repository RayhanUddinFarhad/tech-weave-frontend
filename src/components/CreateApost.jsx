'use client'
import React, { useContext, useState } from 'react';
import { FaPen } from 'react-icons/fa';
import PostModal from './modals/PostModal';
import { AuthContext } from '@/context/AuthProvider';
import Swal from 'sweetalert2';
import Link from 'next/link';

const CreateApost = () => {

    const {user} = useContext(AuthContext)

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        if (user) {
            setShowModal(true);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You are not logged in. Log In to Create your post',
                footer: '<Link href="/log-in">Log In Now</Link>'
            });
        }
    };

    return (
        <>
            <div className='fixed bottom-4 right-4'>
                <label htmlFor="my_modal_7" >
                    <div className='bg-red-400 border border-gray-300 p-4 rounded-full shadow cursor-pointer' onClick={openModal}>
                        <FaPen className='text-white' />
                    </div>
                </label>
            </div>

            {user && showModal && <PostModal closeModal={() => setShowModal(false)} />}
        </>
    );
};

export default CreateApost;