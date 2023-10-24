import React, { useEffect, useState } from 'react'
import './Category.css'


function Category({handleCategory,options}) {


   
  return (
   
    <div className='category container d-flex  justify-content-center align-items-center'>
   
      
      
        <div className='category_item w-100 d-flex justify-content-evenly  align-items-center'>
             {options.map((item, index)=>(
                <div className='item' key={index} onClick={()=>handleCategory(item)} >
                    {item}
                </div>
             ))}
        </div>
     
  </div>
  )
}

export default Category