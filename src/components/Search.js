import React from 'react';
import '../styles/search.css'

const Search = () => {
  return (
    <div>
      <div className='circleSearch'>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
      </div>
      <input className='inputsearch' type="search" placeholder='Search...'>
      </input>
    </div>
  )
}

export default Search