import React from 'react'
import './Badge.css'

const Badge = ({options}) =>
  <p  className='chip'>{options?.category}</p>;
 
export default Badge