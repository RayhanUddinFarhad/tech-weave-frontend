'use client'
import usePosts from '@/hooks/usePosts';
import Link from 'next/link';
import React from 'react';

const Trending = () => {
    // const posts = [
    //     {
    //         title: "What is SaaS? Software as a Service Explained",
    //         desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
    //         img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    //         authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    //         authorName: "Sidi dev",
    //         date: "Jan 4 2022",
    //         href: "javascript:void(0)"
    //     },
    //     {
    //         title: "A Quick Guide to WordPress Hosting",
    //         desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
    //         img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    //         authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
    //         authorName: "Micheal",
    //         date: "Jan 4 2022",
    //         href: "javascript:void(0)"
    //     },
    //     {
    //         title: "7 Promising VS Code Extensions Introduced in 2022",
    //         desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
    //         img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    //         authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
    //         authorName: "Luis",
    //         date: "Jan 4 2022",
    //         href: "javascript:void(0)"
    //     },
    //     {
    //         title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
    //         desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
    //         img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    //         authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
    //         authorName: "Lourin",
    //         date: "Jan 4 2022",
    //         href: "javascript:void(0)"
    //     }
    // ]


    const [posts] = usePosts()
    const approvedPosts = posts.filter (post => post.status == 'approved')

    return (
        <section className=" mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="text-left">
                <span className="text-3xl font-bold text-gradient-primary">
                    On Trending
                </span>
                
            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    approvedPosts?.slice(7,13).map((items, key) => (
                        <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-lg duration-300 hover:shadow-sm" key={items?._id}>
                            <Link href={`/posts/${items._id}`} >
                                <img src={items.postImage} loading="lazy" alt={items.title}  className="w-full h-48 rounded-t-md" />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    <div className="flex-none w-10 h-10 rounded-full">
                                        <img src={items.photo} className="w-full h-full rounded-full" alt={items.name} />
                                    </div>
                                    <div className="ml-3">
                                        <span className="block text-gray-900">{items.name}</span>
                                        <span className="block text-gray-400 text-sm">{items.date}</span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-gray-900">
                                        {items.title}
                                    </h3>
                                    <div className='badge badge-info text-white my-5 flex justify-center mx-auto'>{items?.category}</div> 
                                    <p className="text-gray-400 text-sm mt-1 whitespace-pre-line">{items?.description.slice(0, 250)}... <Link className='btn-link' href={`/posts/${items?._id}`}>Read More</Link>...</p>
                                </div>
                            </Link>
                        </article>
                    ))
                }
            </div>
        </section>
    );
};

export default Trending;