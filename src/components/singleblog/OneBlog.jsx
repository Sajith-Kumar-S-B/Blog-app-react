import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import seaImage from '../../images/Cover photo.webp'
import './OneBlog.css'
import { getABlog } from '../../services/allAPI';
import { ToastContainer,toast } from 'react-toastify';


function OneBlog() {

  const[oneBlog,setOneBlog] = useState()
  const {id} = useParams();


  useEffect(()=>{

   getSingleBlog(id)
  },[id])

  const  getSingleBlog = async (id)=>{
    const resp = await getABlog(id)

    if(resp.status>=200 && resp.status<300){
      // set server response

      setOneBlog(resp.data);

    
    }else{
      toast.error('Something went wrong')
    }
  }
  
  return (
    <div style={{marginTop:'100px'}} className='container' >
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
     
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>{oneBlog?.date}</p>
            <h1>{oneBlog?.title}</h1>
            <div className='blog-subCategory'>
                <div>
                </div>
            
            </div>
          </header>
          <img src={oneBlog?.image} alt='cover' />
          <p className='blog-desc'>{oneBlog?.description}</p>
        </div>
     
        <ToastContainer position='top-center'
        theme='colored' autoClose={2000} />
    </div>
  )
}

export default OneBlog