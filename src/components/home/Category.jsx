import React from 'react';

const Category = () => {
    return (
        <section>



            <div className=" p-5 mx-auto dark:bg-gray-800 dark:text-gray-100">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4  lg:grid-rows-2">
                    <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group dark:bg-gray-500 " style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)' }}>


                        <h2 className="z-10  p-5">
                            <a href="#" className="font-medium  text-2xl group-hover:underline lg:font-semibold text-gray-100">Web Development</a>
                        </h2>
                    </div>
                    <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)' }}>
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>

                        <h2 className="z-10 p-5">
                            <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline text-2xl text-gray-100"> Programming language</a>
                        </h2>
                    </div>
                    <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)' }}>


                        <h2 className="z-10 p-5">
                            <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline text-2xl text-gray-100">Programming Career</a>
                        </h2>
                    </div>
                    <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1608306448197-e83633f1261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)' }}>

                        <h2 className="z-10 p-5">
                            <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline text-gray-100 text-2xl">Machine Learning</a>
                        </h2>
                    </div>
                    <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)' }}>


                        <h2 className="z-10 p-5">
                            <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline text-gray-100 text-2xl ">Motivation</a>
                        </h2>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Category;