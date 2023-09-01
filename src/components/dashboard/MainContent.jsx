'use client'
import { AuthContext } from '@/context/AuthProvider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';

import { FaArrowLeft, FaChartLine, FaFile, FaListAlt, FaPen, FaUsers } from "react-icons/fa";
import useIsAdmin from '@/hooks/useIsAdmin';
import axios from 'axios';

// define "lord-icon" custom element with default properties

const MainContent = () => {
    const { user, loading } = useContext(AuthContext)
    const pathname = usePathname()



    const [admin, setAdmin] = useState(null)

    useEffect(() => {
        if (!user) {
          return;
        }
      
        fetch(`https://tech-weave-backend.onrender.com/admin/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log("Response from /admin/:email:", data);
            setAdmin(data.role);
          })
          .catch((error) => {
            console.error("Error fetching role:", error);
          });
      }, [user]);
      
    
  

    

console.log(admin);




    // const [isAdminRole, isAdminLoading] = useIsAdmin()

    // console.log(isAdminRole);
    


    
    
    // const [isAdminRole, setIsAdminRole] = useState(null);

    // useEffect(() => {
    //   if (!user) {
    //     return;
    //   }
  
    //   // Fetch user role using axios
    //   axios
    //     .get(`https://tech-weave-backend.onrender.com/admin/${user.email}`)
    //     .then((response) => {
    //       setIsAdminRole(response.data.role); // Assuming the server returns { role: "admin" } or null
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //       setIsAdminRole(null); // Set role to null in case of an error
    //     });
    // }, [user]); // Add 'user' to the dependency array
  
    // if (isAdminRole === null || loading) {
    //   return <p>Loading...</p>; // Display a loading indicator while fetching
    // }
    



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
                    admin == 'admin' && <>
                    
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