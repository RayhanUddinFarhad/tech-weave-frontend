'use client'
import usePosts from '@/hooks/usePosts';
import Link from 'next/link';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Blogs = () => {

    const [posts, refetch] = usePosts()

    return (
       <>
       
       {
        posts?.map (post => {

            return (


            <> 
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src= {post?.postImage} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div></>
            )
        })
       }
       </>
    );
};

export default Blogs;