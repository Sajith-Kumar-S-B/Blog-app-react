import React from 'react'
import notFound from '../../images/13525-empty.gif'

function NotFound() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <img src={notFound} alt="" />
    </div>
  )
}

export default NotFound