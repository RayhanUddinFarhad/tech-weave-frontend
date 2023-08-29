'use client'
import usePosts from '@/hooks/usePosts';
import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import PostCard from './PostCard';
const Blogs = () => {

  const [posts, refetch] = usePosts()
  const [tabIndex, setTabIndex] = useState(0);


  

  const webDevelopment = posts.filter (post => post.category == 'Web Development' && post.status == 'approved')
  const machineLearning = posts.filter (post => post.category == 'Machine Learning' && post.status == 'approved')
  const language = posts.filter (post => post.category == 'Programming Language' && post.status == 'approved')
  const career = posts.filter (post => post.category == 'Programming Career' && post.status == 'approved')
  const Motivational = posts.filter (post => post.category == 'Motivational' && post.status == 'approved')


  const [input, setInput] = useState('')
  const [allpost, setAllPost] = useState([])



  useEffect(() => {
    axios
      .get(`https://tech-weave-backend.onrender.com/search/${input}`)
      .then(res => {
        console.log(res);
        setAllPost(res.data); // Update this line to store only the data
      })
      .catch(err => {
        console.log(err);
      });
  }, [input]);








  return (
    <>

      <div>
        <div style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80) no-repeat center', backgroundSize: 'cover' }}
          className="py-40 my-10 px-1 md:px-8 text-center relative text-white font-bold text-2xl md:text-3xl overflow-auto">
          <h1 className="pb-4">Search for blogs</h1>
          <div className="w-11/12 md:w-3/4 lg:max-w-3xl m-auto">
            <div className="relative z-30 text-base text-black">
              <form  >
              <input type="text"   value={input} onInput={e => setInput(e.target.value)}placeholder="Search" className="mt-2 shadow-md focus:outline-none rounded-2xl py-3 px-6 block w-full"></input>
              </form>


              <div
                className="text-left absolute top-10 rounded-t-none rounded-b-2xl shadow bg-white divide-y w-full max-h-40 overflow-auto">
              </div>
            </div>
          </div>
        </div>





        <Tabs selectedTabClassName='button-secondary h-full rounded-xl ' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

          <TabList className='border-0 mx-auto grid lg:grid-cols-6 grid-cols-3 justify-center max-w-screen-sm mb-10 text-lg space-x-5 gap-5 p-8'>

            <Tab className='border rounded-xl p-2 border-indigo-400 text-xs cursor-pointer w-full'>All Blogs</Tab>
            <Tab className='border rounded-xl p-2 border-indigo-400 text-xs cursor-pointer w-full'>Web Dev</Tab>
            <Tab className='border rounded-xl p-2 border-indigo-400 text-xs cursor-pointer w-full'>Machine Learning</Tab>
            <Tab className='border rounded-xl p-2 border-indigo-400 text-xs cursor-pointer w-full'> Languages</Tab>
            <Tab className='border rounded-xl p-2 border-indigo-400 text-xs cursor-pointer w-full text-center'> Career</Tab>
            <Tab className='border rounded-xl p-2 border-indigo-400 text-xs cursor-pointer w-full text-center'>Motivation</Tab>
          </TabList>






          <TabPanel>
            {

              allpost?.map (post => <PostCard post={post} key={post?._id}></PostCard>)
            }
          </TabPanel>
          <TabPanel>

          {

webDevelopment?.map (post => <PostCard post={post} key={post?._id}></PostCard>)
}

          </TabPanel>
          <TabPanel>
          {

machineLearning?.map (post => <PostCard post={post} key={post?._id}></PostCard>)

}          </TabPanel>
          <TabPanel>
          {

language?.map (post => <PostCard post={post} key={post?._id}></PostCard>)

}              </TabPanel>
          <TabPanel>
          {

career?.map (post => <PostCard post={post} key={post?._id}></PostCard>)
}          </TabPanel>
          <TabPanel>
          {

Motivational?.map (post => <PostCard post={post} key={post?._id}></PostCard>)
}                    </TabPanel>
        </Tabs>
      </div>
    </>)
};

export default Blogs;