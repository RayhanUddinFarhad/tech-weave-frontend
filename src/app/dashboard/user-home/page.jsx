import MainContent from '@/components/dashboard/MainContent';
import UserDashboard from '@/components/dashboard/userDashboard/UserDashboard';
import React from 'react';

const page = () => {
    return (
        <MainContent>
            <UserDashboard></UserDashboard>
        </MainContent>
    );
};

export default page;