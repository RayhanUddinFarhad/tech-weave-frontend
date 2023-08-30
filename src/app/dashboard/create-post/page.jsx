
'use client'
import MainContent from '@/components/dashboard/MainContent';
import Image from 'next/image';

import React from 'react';
import CreatePost from '@/components/dashboard/userDashboard/CreatePost';

const Page = () => {
 

    return (
       <>
       
       {
        typeof window !== 'undefined' &&  <MainContent>
        <CreatePost></CreatePost>
    </MainContent>
       }
       
       </>
    );
};

export default Page;
