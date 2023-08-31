'use client'
import React, { useContext } from 'react';
import MainContent from './MainContent';
import UserDashboard from './userDashboard/UserDashboard';
import useIsAdmin from '@/hooks/useIsAdmin';
import AdminDashboard from './adminDashboard/AdminDashboard';

const Dashboard = () => {

    const [isAdmin] = useIsAdmin()
    return (
        <>
{
    isAdmin?.role === 'admin' ? <AdminDashboard></AdminDashboard> : <UserDashboard></UserDashboard>
}
        
        </>
    );
};

export default Dashboard;