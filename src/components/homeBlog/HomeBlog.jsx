import React, { useEffect, useState } from 'react'
import './HomeBlog.css'
import { getAllBlogs } from '../../services/allAPI'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { serverURL } from '../../services/serverURL'
import { Button } from 'react-bootstrap'

function HomeBlog({id}) {

  const [data,setData] = useState([])
  

  const getAllUploadedBlogs = async ()=>{
    // make api call
    const newBlogs  = await getAllBlogs()
    const start = newBlogs.data.length - 3;
    const end = newBlogs.data.length
   const response = await axios.get(`${serverURL}/blogs?_start=${start}&_end=${end}`)

   if(response.status>=200 && response.status<300){
    setData(response.data)
    // set server response
  }else{
    toast.error("Something Went Wrong")
  }


  }


  const excerpt = (str)=>{

    if(str.length>50){
    str = str.substring(0,200) + "..."

    }
   return str;
  }


  useEffect(()=>{
   getAllUploadedBlogs()
  },[])

  return (
    <section style={{width:'100%',height:'auto'}} data-aos="fade-up" >
      <div>
        <div className='d-flex justify-content-center align-items-center flex-column'>
         <h1>Recent Posts</h1>
          <h5>Where Stories Find Their Home</h5>


        </div>

        { data?.length>0?data.map((item,index)=>
        <div key={index} className='d-flex justify-content-center align-items-center flex-column'>
        <Link className='recent' to={`/oneblog/${item?.id}`}>
           <div className='blog_one ' data-aos="fade-up">
             <div className='blog_content d-flex justify-content-between'>
             <div className='blog_img'> <img width={'100%'} height={'100%'} src={item?.image} alt="" />
             </div>
              <div className='blog_description d-flex justify-content-between  flex-column'>
                <div className='d-flex justify-content-between flex-column '>
                  <h2>{item?.title}</h2>
                  <p className='home-desc'>{excerpt(item?.description)}
                  <Link className='read' to={`/oneblog/${item?.id}`}>Read More</Link></p>
                  <hr />
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='chip'>{item?.category}</p>
                   <div className='views'>144<i className="fa-regular fa-eye"></i></div>
                   <div><i className='fa-regular fa-heart'></i></div>
                </div>
              </div>
  
             </div>
           
           </div>
        </Link>

        
         

        </div>
        ): <p className='text-center'>No Blogs</p>  
          }

<Link className='showBtn' to={'/blogs'}>
         <Button >Show All Posts</Button>
         </Link>



      </div>
    </section>
  )
}

export default HomeBlog