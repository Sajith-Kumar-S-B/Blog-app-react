import React, { useEffect, useState } from 'react'
import HomeContent from '../components/Homecontent/HomeContent'
import HomeBlog from '../components/homeBlog/HomeBlog'
import { getAllBlogs } from '../services/allAPI'

function Home() {
 
  return (

    

    <div className='home-compo'>
      <HomeContent/>
      <HomeBlog/>
     

    </div>
  )
}

export default Home