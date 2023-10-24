import React from 'react'
import './Search.css'

function Search({ handleSearch,onInputChange,searchValue}) {
  return (
    <div className='searchBar-wrap'>
    <form onSubmit={handleSearch}>
      <input
        type='search'
        placeholder='Search Blog..'
        value={searchValue}
        onChange={onInputChange}
      />
      
      <button type='submit'><i className="fa-solid fa-search"></i></button>
    </form>
  </div>
  )
}

export default Search