import LogIn from '@/components/authontication/logIn/LogIn';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'TechWeave | Log In',
    
  }
const page = () => {
    return (
        <LogIn></LogIn>
    );
};

export default page;