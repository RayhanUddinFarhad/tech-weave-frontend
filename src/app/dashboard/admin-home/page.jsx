'use client'
import MainContent from '@/components/dashboard/MainContent';
import AdminDashboard from '@/components/dashboard/adminDashboard/AdminDashboard';
import useIsAdmin from '@/hooks/useIsAdmin';
import React from 'react';

const page = () => {
    return (
       <>
       

        <AdminDashboard></AdminDashboard>     
       
       
       </>
    );
};

export default page;