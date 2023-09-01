'use client'
import useBookMark from '@/hooks/useBookMark';
import React from 'react';
import PostCard from './PostCard';
import BookmarkCard from './BookmarkCard';

const Bookmark = () => {

    const [bookmark] = useBookMark()
    return (
       <>

       {
        bookmark.length<0 ? <p>You have not post yet</p> : bookmark?.map(bookmark => <PostCard key={bookmark?._id} post={bookmark}></PostCard>)
       }
       
       
       </>
    );
};

export default Bookmark;