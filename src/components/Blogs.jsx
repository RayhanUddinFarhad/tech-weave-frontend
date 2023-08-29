import usePosts from '@/hooks/usePosts';
import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
const Blogs = () => {

    const [posts, refetch] = usePosts()
    const [tabIndex, setTabIndex] = useState(0);


const allPost = posts.filter (post => post.status === 'approved')


    return (
       <>
       
       <div>




            <Tabs selectedTabClassName='button-primary rounded-xl ' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

                <TabList className='border-0 mx-auto flex justify-center mb-10 text-lg'>

                    <Tab>All Blogs</Tab>
                    <Tab>Web Development</Tab>
                    <Tab>Programming Career</Tab>
                    <Tab>Motivation</Tab>
                </TabList>


                {/* <form onChange={handleSubmit(onSubmit)}><select {...register("Sort by price")} className="select select-bordered w-full max-w-xs mx-auto">
                    <option disabled selected>Sort by price</option>
                    <option value= 'lowPrice'>Low Price</option>
                    <option value= 'highPrice'>High Price</option>
                </select>
                </form> */}



                <TabPanel>
                {
                  allPost?.map (post => {
                    return (
                      <>
                      <div className="hero min-h-96 bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={post?.postImage} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
                      </>
                    )
                  })
                }
                </TabPanel>
                <TabPanel>

                    Web Development


                </TabPanel>
                <TabPanel>
                    Programming Career
                </TabPanel>
                <TabPanel>
                    Motivation
                </TabPanel>
            </Tabs>
        </div>
       </>
    );
};

export default Blogs;