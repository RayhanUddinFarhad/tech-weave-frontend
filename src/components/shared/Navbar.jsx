'use client'

import { AuthContext } from '@/context/AuthProvider';
import useBookMark from '@/hooks/useBookMark';
import useIsAdmin from '@/hooks/useIsAdmin';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { FaBookmark, FaCode } from 'react-icons/fa';


const Navbar = () => {


    const [state, setState] = useState(false)

    const { user, logOut } = useContext(AuthContext)
    const pathname = usePathname()
    const [bookmarklength, setBookmarklength] = useState()



const [bookmark, refetch] = useBookMark()



    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, [])
    return (
        <nav className={` pb-5 md:text-sm ${state ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0" : ""}`}>
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                <div className="flex items-center justify-between py-5 md:block">
                   <Link href='/'>

                    <h1 className='text-2xl font-extrabold text-nowrap flex items-center'>Tech <FaCode className='text-red-500' ></FaCode><span className='text-gradient-primary'>Weave</span></h1>
                   </Link>
                    <div className="md:hidden">
                        <button className="menu-btn text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                    <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">


                        <li className={pathname === '/' ? " border-red-500 border-b-4" : "text-gray-700 hover:text-gray-900"}>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className={pathname === '/posts' ? " border-red-500 border-b-4" : "text-gray-700 hover:text-gray-900"}>
                            <Link href='/posts'>Blogs</Link>
                        </li>
                        <li className="text-gray-700 hover:text-gray-900">
                            <Link href='/'>About Us</Link>
                        </li>

                        {
                            user && <li className={(pathname === '/dashboard') ? "border-red-500 border-b-4" : "text-gray-700 hover:text-gray-900"}>
                            <Link href='/dashboard' className="block">
                                Dashboard
                            </Link>
                        </li>
                        }

                    </ul>
                    <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">


                        {/* {
                            user && <>
                            
                            
                    <div className="indicator">
        <Link href='/bookmark'>
        
        <FaBookmark className='text-xl text-red-500'></FaBookmark></Link>
          <span className="badge  badge-info text-white badge-sm  indicator-item">{bookmark?.length}</span>
        </div></>
                        } */}


                        {
                            user ? <img alt="" src={user?.photoURL} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" /> : <Link href='/log-in' className="block text-gray-700 hover:text-gray-900">
                                Log in
                            </Link>
                        }
                        {
                            user ? <button onClick={() => logOut()} className='button-primary rounded-xl '>Log Out</button> : <Link href='/sign-in' className="flex items-center justify-center gap-x-1 rounded-full button-primary">
                                Sign up
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;