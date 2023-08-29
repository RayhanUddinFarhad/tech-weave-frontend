'use client'
import { AuthContext } from '@/context/AuthProvider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import { FaArrowLeft, FaChartLine, FaFile, FaListAlt, FaPen, FaUsers } from "react-icons/fa";
import useIsAdmin from '@/hooks/useIsAdmin';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const MainContent = ({ children }) => {
    const { user } = useContext(AuthContext)
    const pathname = usePathname()

    const [isAdmin] = useIsAdmin(user?.email)





    return (
        <div className="drawer h-full lg:drawer-open bg-white">
            <label htmlFor="my-drawer-2" className="btn btn-primary  absolute  drawer-button lg:hidden top-0 text-white">

<FaArrowLeft/> Open Tab
</label>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {children}
                

            </div>
            <div className="drawer-side  ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                {
                    isAdmin.role == 'admin' ? <ul className="menu p-4 w-80 text-lg space-y-5 font-bold min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li>  <Link href= '/dashboard/admin-home' className={pathname === '/dashboard/admin-home' ? 'bg-[#8f6dff] text-gray-100 border-r-8 border-gray-200' : ''}><FaChartLine className='text-xl' /> Dashboard</Link></li>

                        <li><Link href='/dashboard/create-post' className={pathname === '/dashboard/create-post' ? 'bg-[#8f6dff] text-gray-100 border-r-8 border-gray-200' : ''}>  <FaPen className='text-xl' /> Create a new post</Link></li>

                        <li><Link href='/dashboard/my-post' className={pathname === '/dashboard/my-post' ? 'bg-[#8f6dff] text-gray-100 border-r-8 border-gray-200' : ''}> <FaFile className='text-xl' /> My Post</Link></li>
                        <li><Link href='/dashboard/admin-posts' className={pathname === '/dashboard/admin-posts' ? 'bg-[#8f6dff] text-gray-100 border-r-8 border-gray-200' : ''}> <FaListAlt className='text-xl' /> Manage Posts</Link></li>

                        <li><Link href='/dashboard/admin-manage-users' className={pathname === '/dashboard/admin-manage-users' ? 'bg-[#8f6dff] text-gray-100 border-r-8 border-gray-200' : ''}> <FaUsers className='text-xl' /> Manage Users</Link></li>
                    </ul>

                        : <ul className="menu p-4 w-80 text-lg space-y-5 font-bold min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <li>  <Link href= '/dashboard/user-home' className={pathname === '/dashboard/user-home' ? 'bg-[#8f6dff] text-gray-100 border-r-8 border-gray-200' : ''}><FaChartLine className='text-xl' /> Dashboard</Link></li>

                        <li><Link href='/dashboard/create-post' className={pathname === '/dashboard/create-post' ? 'bg-[#8f6dff] text-gray-100 border-r-8 border-gray-200' : ''}>  <FaPen className='text-xl' /> Create a new post</Link></li>

                        <li><Link href='/dashboard/my-post' className={pathname === '/dashboard/my-post' ? 'bg-[#8f6dff] text-gray-100 border-r-8 border-gray-200' : ''}> <FaFile className='text-xl' /> My Post</Link></li>
                        </ul>
                }

            </div>
        </div>
    );
};

export default MainContent;