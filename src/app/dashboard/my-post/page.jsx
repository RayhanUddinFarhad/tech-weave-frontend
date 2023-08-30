'use client'
import MainContent from '@/components/dashboard/MainContent';
import MyPosts from '@/components/dashboard/userDashboard/MyPosts';
import React from 'react';

const page = () => {
    return (
        <>
        
        {
            typeof window !== 'undefined' && <MainContent>


            <MyPosts></MyPosts>
        </MainContent>
        }
        </>
    );
};

export default page;