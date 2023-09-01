'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaCode, FaFacebook, FaGithub } from 'react-icons/fa';

const Footer = () => {
    const pathname = usePathname()
    const footerNavs = [
        {
            href: '/',
            name: 'About'
        },
        {
            href: '/',
            name: 'Blog'
        },
        {
            href: '/',
            name: ''
        },
        {
            href: '/',
            name: 'Team'
        },
        {
            href: '/',
            name: 'Careers'
        },
        {
            href: '/',
            name: 'Support'
        }
    ]

    const showFooter = !pathname.includes('/dashboard');

    return (
        <>
        {showFooter && (
            <footer className="text-white bg-gray-800 px-4 py-5 mt-12  mx-auto md:px-8">
                <div className="max-w-lg sm:mx-auto sm:text-center">
                    <Link href='/'>
                        <h1 className='text-2xl font-extrabold text-nowrap flex items-center justify-center'>Tech <FaCode className='text-red-500' /><span className='text-gradient-primary'>Weave</span></h1>
                    </Link>
                    <p className="leading-relaxed mt-2 text-[15px]">
                        Lorem Ipsum has been the {`industry's`} standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                    {footerNavs.map((item, idx) => (
                        <li key={idx} className=" hover:text-gray-800">
                            <a href={item.href}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="mt-8 items-center justify-between sm:flex">
                    <div className="mt-4 sm:mt-0">
                        &copy; 2022 Float UI All rights reserved.
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <ul className="flex items-center space-x-4">
                            <li>
                                <Link href="/">
                                    <FaFacebook className="w-10 h-10  rounded-full flex items-center justify-center text-indigo-400" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <FaGithub className="w-10 h-10  rounded-full flex items-center justify-center" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <style jsx>{`
                    .svg-icon path,
                    .svg-icon polygon,
                    .svg-icon rect {
                        fill: currentColor;
                    }
                `}</style>
            </footer>
        )}
        </>
    );
};

export default Footer;
