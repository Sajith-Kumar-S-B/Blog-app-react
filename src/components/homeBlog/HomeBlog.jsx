import React, { useEffect, useState } from 'react'
import './HomeBlog.css'
import { getAllBlogs } from '../../services/allAPI'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HomeBlog({id}) {

  const [data,setData] = useState([])
  

  const getAllUploadedBlogs = async ()=>{
    // make api call
    const {data}  = await getAllBlogs()
   setData(data)
  }


  const excerpt = (str)=>{

    if(str.length>50){
    str = str.substring(0,300) + "..."

    }
   return str;
  }


  useEffect(()=>{
   getAllUploadedBlogs()
  },[])

  return (
    <section style={{width:'100%',height:'auto'}}>
      <div>
        <div className='d-flex justify-content-center align-items-center flex-column'>
         <h1>Blog</h1>
          <h3>Mindfulness, Meditation and Everything in Between</h3>


        </div>

        { data?.length>0?data.map((item,index)=>
        <div key={index} className='d-flex justify-content-center align-items-center flex-column'>
         <div className='blog_one'>
           <div className='blog_content d-flex justify-content-evenly'>
           <div className='blog_img'> <img width={'100%'} height={'100%'} src={item?.image} alt="" /></div>
            <div className='blog_description d-flex justify-content-center flex-column'>
              <div>
                <h2>{item?.title}</h2>
                <p>{excerpt(item?.description)}
                <Link to={`/oneblog/${item?.id}`}>Read More</Link></p>
                <hr />
              </div>
              <div className='d-flex justify-content-between'>
               <Badge>{item?.category}</Badge>
                 <p>144 views</p>
                 <div>like</div>
              </div>
            </div>

           </div>
         
         </div>




        </div>
        ): <p>No Blogs</p>  
          }





      </div>
    </section>
  )
}

export default HomeBlog