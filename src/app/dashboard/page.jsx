'use client'
import Dashboard from '@/components/dashboard/Dashboard';
import MainContent from '@/components/dashboard/MainContent';
import Link from 'next/link';
import React from 'react';

const page = () => {

   

    
    return (

        <>

        {
            typeof window !== 'undefined' && <Dashboard></Dashboard>

        }
        
        </>
    );
};

export default page;