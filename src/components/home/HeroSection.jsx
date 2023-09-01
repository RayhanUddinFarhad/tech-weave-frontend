'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const HeroSection = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
          AOS.init();
        }
      }, []);
    return (
        <section>
            <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
                <div data-aos="fade-down"     data-aos-duration="1000"
 className="space-y-5 max-w-4xl mx-auto text-center">
                    <h1 className="text-sm text-indigo-600 font-medium">
                        Welcome to <span className="text-indigo-600">Tech Weave</span>

                    </h1>
                    <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
                        Explore Insights, Share Ideas, and
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]"> Connect with Tech Enthusiasts
                        

                        
                        
                        </span>

                    </h2>
                    <p className="max-w-2xl mx-auto">
                        Dive into a world of tech expertise. Read captivating articles, write your own posts, and engage in discussions that shape the future.

                    </p>
                    <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                        <Link href="/posts" className="button-primary rounded-xl">
                            Explore Articles
                        </Link>

                    </div>
                </div>
                <div  className="">
                    <Image src="/assets/HeroImage2.png" width={400} height={500} className="max-w-screen-2xl mx-auto " alt=""></Image>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;