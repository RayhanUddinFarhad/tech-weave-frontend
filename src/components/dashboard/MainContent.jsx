'use client'
import { AuthContext } from '@/context/AuthProvider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react';

import { FaArrowLeft, FaChartLine, FaFile, FaListAlt, FaPen, FaUsers } from "react-icons/fa";
import useIsAdmin from '@/hooks/useIsAdmin';

// define "lord-icon" custom element with default properties

const MainContent = () => {
    const { user } = useContext(AuthContext)
    const pathname = usePathname()

    const [isAdmin, isLoading] = useIsAdmin()
    console.log(isAdmin.role);


    



    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 text-lg space-y-5 font-bold min-h-full bg-base-200 text-base-content ">
                <li className={pathname === '/dashboard' ? 'bg-[#8f6dff] text-gray-100 border-r-8 border-gray-200 p-2 rounded-lg    ' : 'flex  '}>
                    <Link href='/dashboard'>
                        <span className='flex items-center '>   <FaChartLine className='text-xl mr-2' /> Dashboard
</span>
                    </Link>
                </li>
                <li className={pathname === '/dashboard/create-post' ? 'bg-[#8f6dff] text-gray-100 border-r-8 border-gray-200 p-2 rounded-lg  flex    ' : 'flex '}>
                    <Link href='/dashboard/create-post'>
                        <span className='flex items-center '>
                            <FaPen className='text-xl mr-2 ' /> Create a new post
                        </span>
                    </Link>
                </li>
                <li className={pathname === '/dashboard/my-post' ? 'bg-[#8f6dff] text-gray-100 border-r-8 border-gray-200 flex  p-2' : 'flex '}>
                    <Link href='/dashboard/my-post'>
                        <span className='flex items-center'>
                            <FaFile className='text-xl mr-2' /> My Post
                        </span>
                    </Link>
                </li>

                {
                    isAdmin?.role ==  'admin' && <>
                    
                    <li className={pathname === '/dashboard/admin-posts' ? 'bg-[#8f6dff] text-gray-100 border-r-8 border-gray-200 flex  p-2' : 'flex '}>
                        <Link href='/dashboard/admin-posts'>
                            <span className='flex items-center'>
                                <FaListAlt className='text-xl mr-2' /> Manage Posts
                            </span>
                        </Link>
                    </li>
                    <li className={pathname === '/dashboard/admin-manage-users' ? 'bg-[#8f6dff] text-gray-100 border-r-8 border-gray-200 flex  p-2' : 'flex '}>
                        <Link href='/dashboard/admin-manage-users'>
                            <span className='flex items-center'>
                                <FaUsers className='text-xl mr-2' /> Manage Users
                            </span>
                        </Link>
                    </li></>
                }
            </ul>

            
                   
            
        </div>
    );
};

export default MainContent;