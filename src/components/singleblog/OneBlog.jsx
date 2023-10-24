import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import seaImage from '../../images/Cover photo.webp'
import './OneBlog.css'
import { getABlog } from '../../services/allAPI';
import { ToastContainer,toast } from 'react-toastify';
import axios from 'axios';
import { serverURL } from '../../services/serverURL';
import { Card, Col, Row } from 'react-bootstrap';


function OneBlog() {

  const[oneBlog,setOneBlog] = useState()
  const [relatedPost,setRelatedPost] = useState([])
  const {id} = useParams();


  useEffect(()=>{

   getSingleBlog(id)
  },[id])

  const  getSingleBlog = async (id)=>{
    const resp = await getABlog(id)
    
    const relatedPostData = await axios.get(`${serverURL}/blogs?category=${resp.data.category}&_start=0&_end=3`)

    if(resp.status>=200 && resp.status<300 || relatedPostData.status>=200 && relatedPostData.status<300){
      // set server response

      setOneBlog(resp.data);
      setRelatedPost(relatedPostData.data)

    
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
                {oneBlog?.category}
                </div>
            
            </div>
          </header>
          <img src={oneBlog?.image} alt='cover' />
          <p className='blog-desc'>{oneBlog?.description}</p>
        </div>


        {relatedPost?.length>0 && (

        
        <> {relatedPost.length>1 &&  <h1 className='related'>Related Post</h1>}
         
         <Row className='row-cols-1 row-cols-md-3 g-4'>

          {relatedPost.filter((item)=>item.id != id).map((item,index)=>(
             <Col key={index}>
             <Card className='mt-5 mb-5'  style={{width:'250px',height:'300px'}} >

              <Link style={{width:'100%',height:'100%'}} to={`/oneblog/${item?.id}`}>

              <Card.Img width={'100%'}  height={'190px'} style={{borderRadius:'0.75rem',padding:'10px'}} variant="top" src={item?.image} alt={item?.title}  />
 
              </Link>
              <Card.Body>
      <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
        <h6>{item?.title}</h6>
        <h6>{item?.description.slice(0,55)}...</h6>

      
        </Card.Title>
      
    </Card.Body>

             </Card>
             
             
             
             </Col>
          ))}

         </Row>
         
         
         
         </>
       




        )
        }
     
        <ToastContainer position='top-center'
        theme='colored' autoClose={2000} />
    </div>
  )
}

export default OneBlog