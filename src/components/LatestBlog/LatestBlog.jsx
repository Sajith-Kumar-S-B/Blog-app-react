import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './LatestBlog.css'

function LatestBlog({title,id,image,category}) {
  return (
    <div className='latest container d-flex justify-content-center align-items-center data-aos="fade-up"'>
      
       <Link to={`/oneblog/${id}`}>
     
          <Card  className='card' style={{width:'200px',height:'250px'}} >
          
             
              <Card.Img style={{width:'170px',height:'170px',borderRadius:'50%'}}  src={image} alt={title} />
              
              
              <Card.Title className='latest-title mt-3'>
            <h6>{category}</h6>
        </Card.Title>
      
          </Card>
       
       
       </Link>


        </div>
  )
}

export default LatestBlog