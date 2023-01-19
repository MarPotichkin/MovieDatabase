import React from 'react'
import InfoUser from './InfoUser'

const Navbar = () => {
  return (
    <nav>
      <h3>The movie database</h3>
      <ul>
        <li>Movies</li>
        <li>Favorites</li>
        <li>
          <svg></svg>
        </li>
      </ul>
      <InfoUser/>
    </nav>
  )
}

export default Navbar