'use client'
import MainContent from '@/components/dashboard/MainContent';
import ManagePost from '@/components/dashboard/adminDashboard/ManagePost';
import React from 'react';

const page = () => {
    return (
        <>
        {
            typeof window !== 'undefined' && <MainContent>

            <ManagePost></ManagePost>

        </MainContent>
        }
        
        </>
    );
};

export default page;