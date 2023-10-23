import React from 'react'
import './HomeContent.css'
import Carousel from 'react-bootstrap/Carousel';
import carouselImage1 from '../../images/Cover photo.webp'
import { Link } from 'react-router-dom';
import {Parallax} from 'react-parallax'
import sea2Image from '../../images/sea2.jpeg'

function HomeContent() {
  return (
   <section style={{width:'100%',height:'auto'}}>
   <Parallax strength={400} className='parallax w-100' bgImage={sea2Image}>
      <div className='main__div' style={{width:'100%',height:'750px'}} >
  
  </div>
   </Parallax>
<div className='d-flex justify-content-between'>
  <div className='content'>
    <h1>Open Your <br /> Mind to <br />
     Mindfulness</h1>
     <p>The blog of here and now</p>
  </div>
  <div style={{width:'600px',height:'700px'}} className='modal__div bg-light'>
  <Carousel style={{width:'100%',height:'100%'}}>
        <Carousel.Item >
           <img width={'100%'} height={'100%'} src={carouselImage1} alt="" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
           <img src={carouselImage1} width={'100%'} height={'100%'} alt="" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
           <img src={carouselImage1} width={'100%'} height={'100%'} alt="" />
          <Carousel.Caption>
  
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <div style={{width:'20px',height:'150px'}} className='icons fs-5 d-flex justify-content-between flex-column'>
      <Link className='text-dark' to={'https://getbootstrap.com/'} style={{textDecoration:'none'}}><i class="fa-brands fa-facebook"></i></Link>
      <Link className='text-dark' to={'https://getbootstrap.com/'} style={{textDecoration:'none'}}><i class="fa-brands fa-twitter"></i></Link>
      <Link className='text-dark' to={'https://getbootstrap.com/'} style={{textDecoration:'none'}}><i class="fa-brands fa-instagram"></i></Link>



      </div>
</div>

   </section>
  )
}

export default HomeContent