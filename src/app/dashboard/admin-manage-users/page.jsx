'use client'
import MainContent from '@/components/dashboard/MainContent';
import ManageUsers from '@/components/dashboard/adminDashboard/ManageUsers';
import React from 'react';

const page = () => {
    return (
        <>

        {
            typeof window !== 'undefined' && <MainContent>
            <ManageUsers></ManageUsers>

        </MainContent>
        }
        
        
        </>
    );
};

export default page;