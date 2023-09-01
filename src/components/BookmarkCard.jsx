import moment from 'moment';
import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const BookmarkCard = ({post}) => {
    return (
        <div className="hero min-h-96 my-10 bg-base-200">
                      <div className="hero-content flex-col lg:flex-row">
                        <img src={post?.postImage} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                          <div className='badge badge-info text-white my-5 flex justify-center mx-auto'>{post?.category}</div>                          <Link href={`/posts/${post._id}`}>

                            <h1 className="text-5xl font-bold hover:underline">{post?.title}</h1>
                          </Link>
                          <p className="py-6">{post?.description.length < 250 ? <>{post.description}</> :
                            <>{post.description.slice(0, 250)}... <Link className='btn-link' href={`/posts/${post?._id}`}>Read More</Link> </>
                          }...</p>



                          <div className='mx-auto flex justify-center space-x-4 items-center'>

                            <img className='object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500 ' src={post?.photo} alt="" />
                            <p className='text-lg font-bold'>{post?.name}</p>
                            <p className='flex items-center'> <FaCalendarAlt className='mr-3'></FaCalendarAlt>
                                <small>{moment(post?.created_at).format('D-MM-yy')}</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
    );
};

export default BookmarkCard;