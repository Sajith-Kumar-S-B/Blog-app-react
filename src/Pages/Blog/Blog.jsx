import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Blog.css'
import { deleteABlog, getAllBlogs } from '../../services/allAPI';
import { Badge, Button } from 'react-bootstrap';
import { toast,ToastContainer } from 'react-toastify';

function Blog({title,category,id,description,image,excerpt}) {
  const[deleteBlogStatus,setDeleteBlogStatus] = useState(false)


  

  const [allBlogs,setAllBlogs] = useState([])


  const getAllUploadedBlogs = async ()=>{
    // make api call
    const {data}  = await getAllBlogs()
   setAllBlogs(data)
  }

  const handleDelete = async (id)=>{
    if(window.confirm("Are you sure to delete the blog")){
    const response  = await deleteABlog(id)
    setDeleteBlogStatus(true)

    if(response.status>=200 && response.status<300){
      // set server response
      toast.success('Blog Deleted successfully')
    }


    }else{
      toast.error("Something Went Wrong")
    }
  

  }




  useEffect(()=>{
   
    getAllUploadedBlogs()
    setDeleteBlogStatus(false)
  },[deleteBlogStatus])

  console.log(allBlogs);


  return (
<section style={{width:'100%',height:'auto'}} className='container d-flex justify-content-center align-items-center'>
<div   style={{marginTop:'100px'}} className='blogList-wrap'>
     {allBlogs?.length>0?allBlogs.map((item,index)=>
      
        <div key={index} className='blogItem-wrap'>
          <img className='blogItem-cover' src={item?.image} alt='cover' />
          <h3>{item?.title}</h3>
          <div className='blogItem-desc'>{item?.description}
          <Link className='blogItem-link' to={`/`}>
              ➝
            </Link>
          </div>
         
         <div className='d-flex justify-content-between'> 
         <Link className='blogItem-link' to={`/edit-blog/${item?.id}`}>
         <i className="fa-solid fa-edit"></i>
            </Link>
            <Badge>{category}</Badge>
          <Button onClick={()=>handleDelete(item?.id)}><i className="fa-solid fa-trash"></i></Button>
          </div>

          <footer>
              <p>Published:{item?.date}</p>
           
          </footer>
        </div>
        
     ):<p>No Blogs Found</p>
      }
       </div>
       <ToastContainer position='top-center'
        theme='colored' autoClose={2000}/>
</section>
  )
}

export default Blog