import MainContent from '@/components/dashboard/MainContent';
import ManageUsers from '@/components/dashboard/adminDashboard/ManageUsers';
import React from 'react';

const page = () => {
    return (
        <MainContent>
            <ManageUsers></ManageUsers>

        </MainContent>
    );
};

export default page;