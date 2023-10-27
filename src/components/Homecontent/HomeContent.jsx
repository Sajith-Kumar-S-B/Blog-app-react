import React from 'react'
import './HomeContent.css'
import Carousel from 'react-bootstrap/Carousel';
import carouselFashion from '../../images/fashion.jpeg'
import tech from '../../images/tech.webp'
import sports2 from '../../images/sports2.webp'
import food from '../../images/food.jpeg'
import { Link } from 'react-router-dom';
import {Parallax} from 'react-parallax'
import sea2Image from '../../images/pawel-czerwinski-vI5XwPbGvmY-unsplash.jpg'

function HomeContent() {
  return (
   <section id='home' style={{width:'100%',height:'100vh'}}>
   <Parallax style={{width:'100%',height:'100%'}} strength={500} className='parallax w-100' bgImage={sea2Image}>
      <div className='home-first'>
  <div className='content'>
   <div className='content-text'>
      <h1>Words That <br /> Inspire, <br />
       Stories <br />That Connect</h1>
       <h5>The blog of here and now</h5>
   </div>
   <div className='subscribe d-flex flex-column justify-content-center align-items-start '>
    <br />
   <p>Subscribe to our Newsletter for latest Posts</p>

              <label htmlFor='subscribe'>
                Email*
                </label>
               <div className='subscribe-sec d-flex justify-content-center align-items-center'>
                  <input width={'100%'} type='text'  id='subscribe' className='input'  />
                  <button  className='w-100 bg-dark d-flex justify-content-center  align-items-center ' style={{color:"white"}}>Subscribe</button>
               </div>
            </div>
            
    
  </div>
 
  
      <div style={{width:'20px',height:'150px'}} className='icons fs-5 d-flex justify-content-between align-items-center'>
      <Link className='text-dark' to={'https://getbootstrap.com/'} style={{textDecoration:'none'}}><i class="fa-brands fa-facebook"></i></Link>
      <Link className='text-dark' to={'https://getbootstrap.com/'} style={{textDecoration:'none'}}><i class="fa-brands fa-twitter"></i></Link>
      <Link className='text-dark' to={'https://getbootstrap.com/'} style={{textDecoration:'none'}}><i class="fa-brands fa-instagram"></i></Link>



      </div>
      

       
  </div>
   </Parallax>
   <div style={{width:'600px',height:'800px'}} className='modals__div'>
  <Carousel className='carousel' style={{width:'100%',height:'100%'}}>
        <Carousel.Item >
           <img width={'100%'} height={'100%'} src={carouselFashion} alt="" />
        
        </Carousel.Item>
        <Carousel.Item>
           <img src={tech} width={'100%'} height={'100%'} alt="" />
         
        </Carousel.Item>
        <Carousel.Item>
           <img src={food} width={'100%'} height={'100%'} alt="" />
         
        </Carousel.Item>
        <Carousel.Item>
           <img src={sports2} width={'100%'} height={'100%'} alt="" />
          
        </Carousel.Item>
      </Carousel>
      </div>
   


   </section>
  )
}

export default HomeContent