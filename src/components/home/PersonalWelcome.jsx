import Image from 'next/image';
import React from 'react';


const PersonalWelcome = () => {
    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex ">
                    <div data-aos="fade-left"     data-aos-duration="1000" className=" sm:hidden lg:block">
                        <Image src="https://rayhanuddinfarhad.netlify.app/assets/MYXJ_20221019174719215_save(1)-dd199d6e.jpg" className='max-w-2xl rounded-xl shadow-xl object-cover' width={300} height={300} alt="" />
                    </div>
                    <div data-aos="fade-right"     data-aos-duration="1000" className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-indigo-600 font-semibold">
                            Who is Developer
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Rayhan Uddin Farhad                        </p>
                        <p className="mt-3 text-gray-600">
                        Hello! {`I'm`} Rayhan Uddin Farhad, from Chittagong, Bangladesh.
I am dedicated to learning and mastering new technologies, and coding has become my true passion.
I invest a significant amount of time in staying up-to-date with the latest trends and honing my skills. If you have an exciting project in mind, {`I'm`} all ears!                       </p>
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalWelcome;