import React from 'react'
import './HomeContent.css'
import Carousel from 'react-bootstrap/Carousel';
import carouselImage1 from '../../images/Cover photo.webp'

function HomeContent() {
  return (
   <section style={{width:'100%',height:'auto'}}>
    <div className='main__div' style={{width:'100%',height:'600px'}} >

</div>
<div style={{width:'600px',height:'600px',marginTop:'50px'}} className='modal__div bg-light'>
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

   </section>
  )
}

export default HomeContent