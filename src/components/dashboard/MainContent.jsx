'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const MainContent = ({ children }) => {


    const [admin, isadmin] = useState(true)
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {children}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                {
                    admin ? <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link href='/dashboard/admin-home'>Home</Link></li>
                        <li><Link href='/dashboard/create-post'>Create a new post</Link></li>
                        <li><Link href='/dashboard/my-post'>My Post</Link></li>
                        <li><Link href='/dashboard/admin-posts'>Posts</Link></li>
                        <li><Link href='/dashboard/admin-manage-users'>Manage Users</Link></li>
                    </ul>

                        : <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <li><Link href='/dashboard/home'>Home</Link></li>
                            <li><Link href='/dashboard/create-post'>Create a new post</Link></li>
                            <li><Link href='/dashboard/my-post'>My Post</Link></li>
                        </ul>
                }

            </div>
        </div>
    );
};

export default MainContent;