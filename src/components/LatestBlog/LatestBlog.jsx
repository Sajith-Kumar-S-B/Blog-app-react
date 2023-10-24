import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './LatestBlog.css'

function LatestBlog({title,id,image,category}) {
  return (
    <div className='latest container d-flex justify-content-center align-items-center'>
      
       <Link to={`/oneblog/${id}`}>
     
          <Card  className='card' style={{width:'200px',height:'200px'}} >
          
             
              <Card.Img style={{width:'150px',height:'150px',borderRadius:'50%'}}  src={image} alt={title} />
              
              
              <Card.Title className='latest-title mt-3'>
            <h6>{category}</h6>
        </Card.Title>
      
          </Card>
       
       
       </Link>


        </div>
  )
}

export default LatestBlog