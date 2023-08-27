import MainContent from '@/components/dashboard/MainContent';
import AdminDashboard from '@/components/dashboard/adminDashboard/AdminDashboard';
import React from 'react';

const page = () => {
    return (
        <MainContent>

            <AdminDashboard></AdminDashboard>     
              </MainContent>
    );
};

export default page;