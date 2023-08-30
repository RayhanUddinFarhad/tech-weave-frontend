'use client'
import MainContent from '@/components/dashboard/MainContent';
import AdminDashboard from '@/components/dashboard/adminDashboard/AdminDashboard';
import useIsAdmin from '@/hooks/useIsAdmin';
import React from 'react';

const page = () => {
    return (
       <>
       {
        typeof window !== 'undefined' &&

        <MainContent>

        <AdminDashboard></AdminDashboard>     
          </MainContent>
       }
       
       </>
    );
};

export default page;