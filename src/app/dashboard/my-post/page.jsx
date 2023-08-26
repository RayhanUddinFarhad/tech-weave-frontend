import MainContent from '@/components/dashboard/MainContent';
import MyPosts from '@/components/dashboard/userDashboard/MyPosts';
import React from 'react';

const page = () => {
    return (
        <MainContent>


            <MyPosts></MyPosts>
        </MainContent>
    );
};

export default page;