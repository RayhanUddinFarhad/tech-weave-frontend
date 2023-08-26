import React from 'react';
async function getData(id) {
    const res = await fetch(`http://localhost:5000/post/${id}`, { cache: 'no-store' })
    
    
    return res.json()
  }
const page = async({params}) => {
    const data = await getData(params.id)
    return (
        <div>
            <h1>{data?.title}</h1>
            
        </div>
    );
};

export default page;