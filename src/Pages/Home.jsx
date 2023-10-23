import React, { useEffect, useState } from 'react'
import HomeContent from '../components/Homecontent/HomeContent'
import HomeBlog from '../components/homeBlog/HomeBlog'
import { getAllBlogs } from '../services/allAPI'

function Home() {
 
  return (

    

    <div style={{marginTop:'120px'}}>
      <HomeContent/>
      <HomeBlog/>
     

    </div>
  )
}

export default Home