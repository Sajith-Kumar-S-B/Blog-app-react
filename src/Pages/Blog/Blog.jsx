import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Blog.css'
import { deleteABlog, getAllBlogs } from '../../services/allAPI';
import { Badge, Button } from 'react-bootstrap';
import { toast,ToastContainer } from 'react-toastify';
import Search from '../../components/search/Search';
import axios, { all } from 'axios';
import { serverURL } from '../../services/serverURL';
import Category from '../../components/Category/Category';
import LatestBlog from '../../components/LatestBlog/LatestBlog';
import Pagination from '../../components/Pagination/Pagination';

function Blog({title,category,id,description,image}) {
  const[deleteBlogStatus,setDeleteBlogStatus] = useState(false)
  const[searchValue,setSearchValue] = useState('')

  const[latestBlog,setLatestBlog] = useState([])
  const[currentPage,setCurrentPage] = useState(0)
  const[pageLimit] = useState(5)
  const[totalBlog,setTotalBlog] = useState(null)


  const options = ["Travel","Fashion","Technology","Fitness","Sports","Food","Movies"]

  
  const [allBlogs,setAllBlogs] = useState([])






  const getAllUploadedBlogs = async (start,end,increase,operation)=>{


    // make api call
    const allBlog = await getAllBlogs()

    setTotalBlog(allBlog.data.length)

    const response  = await axios.get(`${serverURL}/blogs?_start=${start}&_end=${end}`)
   if(response.status>=200 && response.status<300){
    // set server response
    setAllBlogs(response.data)
    if(operation){
      setCurrentPage(0)
    }else{
      setCurrentPage(currentPage + increase)

    }

  }else{
    toast.error("Something Went Wrong")
  }
  }

  const handleDelete = async (id)=>{
    if(window.confirm("Are you sure to delete the blog")){
    const response  = await deleteABlog(id)
    setDeleteBlogStatus(true)

    if(response.status>=200 && response.status<300){
      // set server response
      toast.success('Blog Deleted successfully')
      getAllUploadedBlogs(0,5,0,"delete")
    }


    }else{
      toast.error("Something Went Wrong")
    }
  

  }

  const getLatestBlogs = async()=>{
    const allBlog = await getAllBlogs()
    const start = allBlog.data.length - 5;
    const end = allBlog.data.length
   const response = await axios.get(`${serverURL}/blogs?_start=${start}&_end=${end}`)

   if(response.status>=200 && response.status<300){
    setLatestBlog(response.data)
    // set server response
  }else{
    toast.error("Something Went Wrong")
  }

  }




  useEffect(()=>{
   getLatestBlogs()
    getAllUploadedBlogs(0,5,0)
    setDeleteBlogStatus(false)
  },[deleteBlogStatus])

  console.log(allBlogs);

  const onInputChange = (e)=>{

    if(!e.target.value){
      getAllUploadedBlogs(0,5,0)
    }
    setSearchValue(e.target.value)

  }

  const handleSearch = async (e)=>{
    e.preventDefault()

    const response = await axios.get(`${serverURL}/blogs?q=${searchValue}`)

    
    if(response.status>=200 && response.status<300){
      // set server response
      setAllBlogs(response.data)
    }
else{
      toast.error("Something Went Wrong")
    }
  

  }


  const handleCategory = async (category)=>{

    const response = await axios.get(`${serverURL}/blogs?category=${category}`)

    
    if(response.status>=200 && response.status<300){
      // set server response
      setAllBlogs(response.data)
    }
else{
      toast.error("Something Went Wrong")
    }
  

  }


  const excerpt = (str)=>{

    if(str.length>50){
    str = str.substring(0,150) + "..."

    }
   return str;
  }


  


  return (
<>
  <div className='first container'>
  <h3 className='text-center'>Latest Blogs</h3>
   <div className='latest-blog'>
      {latestBlog?.map((item,index)=>(
        <LatestBlog key={index} {...item} />
      ))}
   </div>
  </div>
  <Search searchValue={searchValue} onInputChange={onInputChange} handleSearch={handleSearch}  />

  <Category options={options} handleCategory={handleCategory} />
  <section style={{width:'100%',height:'auto'}} className='container d-flex justify-content-center align-items-center'>


  
  <div   className='blogList-wrap' data-aos="fade-up" >
       {allBlogs?.length>0?allBlogs.map((item,index)=>
        
          <div key={index} className='blogItem-wrap'>
            <img className='blogItem-cover' src={item?.image} alt='cover' />
           
            <h3>{item?.title}</h3>
            <h5>{item?.category}</h5>
            <div className='blogItem-desc'>{excerpt(item?.description)}
            <Link className='blogItem-link' to={`/oneblog/${item?.id}`}>
                Read More ➝
              </Link>
            </div>
           
           <div className='edit d-flex justify-content-between align-items-center'> 
           <Link className='blogItem-link' to={`/edit-blog/${item?.id}`}>
           <i className="fa-solid fa-edit"></i>
              </Link>
              
            <div className='delete' onClick={()=>handleDelete(item?.id)}><i className="fa-solid fa-trash"></i></div>
            </div>
  
            <footer>
                {item?.date}
             
            </footer>
          </div>
          
       ): <p className='text-center'>No Blogs</p> 
        }
         </div>
         
         <ToastContainer position='top-center'
          theme='colored' autoClose={2000}/>
  </section>
  <div className='mt-3'>
          <Pagination currentPage={currentPage} getAllUploadedBlogs={getAllUploadedBlogs} pageLimit={pageLimit} allBlogs={allBlogs} totalBlog={totalBlog} />
         </div>
</>
  )
}

export default Blog