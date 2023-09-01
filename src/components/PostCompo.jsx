'use client'
import React, { useContext, useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import PostCard from './PostCard';
import { FaBookmark, FaCalendarAlt, FaCheck, FaCopy, FaFacebook, FaLinkedinIn, FaRegBookmark, FaRegCheckSquare, FaRegCopy, FaTwitter } from 'react-icons/fa';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '@/context/AuthProvider';
import Swal from 'sweetalert2';
import useBookMark from '@/hooks/useBookMark';
import { FacebookIcon, LinkedinShareButton, TwitterShareButton } from 'react-share';



const PostCompo = ({ data }) => {

  const { user } = useContext(AuthContext)
  const [IsBookmark, setBookmark] = useState(false)
  const [bookmark, refetch] = useBookMark()
  const [status, setStatus] = useState('')
  const [isCopied, setIsCopied] = useState(false);


  
  // const handleBookmark = () => {

  //   axios.post(`https://tech-weave-backend.onrender.com/bookmark`, {
  //   id : data?._id,
  //   email: user?.email,
  //   title: data?.title,
  //   description: data?.description,
  //   category: data?.category,
  //   postImage: data?.postImage,





  // })
  //   .then(res => {
  //     console.log(res);
  //     // Swal.fire(
  //     //   'Good job!',
  //     //   'Your Post has been successfully uploaded! Wait for approve',
  //     //   'success'
  //     // )
  //     setBookmark(true)
  //     setStatus(res.status)
  //     refetch()
  //   })
  //   .catch(error => {
  //     console.log(error.message);

  //   })
  // }


  

  // useEffect(() => {
  //   const bookmarked = bookmark.find((bookmarkItem) => bookmarkItem?.id == data?._id);
  //   if (bookmarked) {
  //     setBookmark(true);
  //   } else {
  //     setBookmark(false);
  //   }
  // }, [bookmark, data]);


  const shareUrl = encodeURIComponent('https://tech-weave.vercel.app/');
  const title = encodeURIComponent(data?.title);
  const imageUrl = encodeURIComponent(data?.postImage); // Replace with your post image URL

  
  // Facebook Share Link
  const facebookShareLink = `https://www.facebook.com/sharer.php?u=${shareUrl}&picture=${imageUrl}`;
  
  // Twitter Share Link
  const twitterShareLink = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}&media=${imageUrl}`;

  
  // LinkedIn Share Link
  const linkedinShareLink = `https://www.linkedin.com/shareArticle?url=${shareUrl}&title=${title}&source=${imageUrl}`;

  const copyToClipboard =  () => {
    try {
       navigator.clipboard.writeText(`https://tech-weave.vercel.app/posts/${data?._id}`); // Replace with your actual post URL
      setIsCopied(true);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  return (
    <>

      <div className='mx-auto w-full space-y-10'>
        <div className='badge badge-info text-white flex justify-center mx-auto'>{data?.category}</div>

        <h1 className='text-center mx-auto text-4xl max-w-screen-lg font-bold'>{data?.title}</h1>

        <div className='mx-auto flex justify-center space-x-4 items-center'>

          <img className='object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500 ' src={data?.photo} alt="" />
          <p className='text-lg font-bold'>{data?.name}</p>
          <p className='flex items-center'> <FaCalendarAlt className='mr-3'></FaCalendarAlt>
            <small>{moment(data?.created_at).format('D-MM-yy')}</small></p>  
               
                 </div>
                 <div>

                 <div className='max-w-screen-md flex items-center  border-gray-200 justify-evenly mx-auto'>


          
 <div>

 {/* {
  IsBookmark ? <FaBookmark className='text-red-500 text-2xl'></FaBookmark> : <FaRegBookmark onClick={() => handleBookmark()} className={`text-2xl cursor-pointer`}></FaRegBookmark> 
 } */}

 </div>

<div className='social-media-share-buttons flex justify-center items-center space-x-5'>
<a href={facebookShareLink} target="_blank" rel="noopener noreferrer" className='btn btn-circle '>

  <FaFacebook className='text-3xl text-indigo-500'></FaFacebook>
</a>
    <a href={twitterShareLink} target="_blank" rel="noopener noreferrer" className='btn btn-circle'>
      <FaTwitter className='text-3xl text-indigo-500'></FaTwitter>
    </a>
    <a href={linkedinShareLink} target="_blank" rel="noopener noreferrer"  className='btn btn-circle'>

      <FaLinkedinIn className='text-3xl text-indigo-500'></FaLinkedinIn>
    </a>

    <button onClick={copyToClipboard}>
    {isCopied ? <FaRegCheckSquare  className='text-3xl ' /> : <FaRegCopy  className='text-3xl ' />}
      </button>


         
        </div>

</div>

                 </div>


        <img src={data?.postImage} alt="" className='max-w-screen-lg max-h-96 mx-auto' />


        <p className='whitespace-pre-line  max-w-screen-lg mx-auto' >


          {data?.description}
        </p>

        
      </div>
    </>)
};

export default PostCompo;