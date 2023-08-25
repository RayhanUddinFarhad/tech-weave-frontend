import Image from 'next/image';
import React from 'react';

const PersonalWelcome = () => {
    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex ">
                    <div className=" sm:hidden lg:block">
                        <Image src="https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-6/354051831_663355012278588_585151294130083991_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH8i22cJgzxiColZW3gh0v2c7NHPO5mI4dzs0c87mYjh0a0oTwB8hJGlAPiLiWZNl_0mvnRSPjlLRw3qYAtqj4L&_nc_ohc=LiLKKPPU1oQAX_mm4uc&_nc_ht=scontent.fdac144-1.fna&oh=00_AfArJ8ug_1Q_EaWzJh5v9CxydZgNt1aMIp8lB59RjEIs9Q&oe=64ECA615" className='max-w-2xl shadow-xl object-cover' width={300} height={300} alt="" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-indigo-600 font-semibold">
                            Who is Developer
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Rayhan Uddin Farhad                        </p>
                        <p className="mt-3 text-gray-600">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                        </p>
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalWelcome;