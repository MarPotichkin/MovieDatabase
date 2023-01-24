import React from 'react'
import InfoUser from './InfoUser'
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <NavLink to={"/"}>
          <svg height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184.65 136.49">
            <path fill="#010101" d="M437.59,52.38c-7.69-7-21.1-9.56-32.35,1.42l-38,37.84v26.93L413,61.72c5.23-6.17,13.27-4.56,17.06-1.11a7.91,7.91,0,0,1,2.22,8.75c-.18.55-.32,1-.45,1.51l7.52,4.31,0-.06C445,68.14,445.18,59.28,437.59,52.38Z" transform="translate(-359.39 -43.21)" />
            <path fill="#7c7c7d" d="M436.08,49.25c-7.7-7-21.09-9.55-32.36,1.42L366.06,88.21,368,90.93,405.24,53.8c11.25-11,24.66-8.43,32.35-1.42a19.82,19.82,0,0,1,3.53,4.18A18,18,0,0,0,436.08,49.25Z" transform="translate(-359.39 -43.21)" />
            <path fill="#010101" d="M465.85,52.38c7.69-7,21.09-9.56,32.34,1.42l38,37.84v26.93L490.39,61.72c-5.23-6.17-13.27-4.56-17.06-1.11a7.92,7.92,0,0,0-2.22,8.75c.18.55.33,1,.46,1.51l-7.52,4.31,0-.06C458.39,68.14,458.25,59.28,465.85,52.38Z" transform="translate(-359.39 -43.21)" />
            <path fill="#7c7c7d" d="M467.35,49.25c7.7-7,21.1-9.55,32.36,1.42l37.66,37.54-1.92,2.72L498.19,53.8c-11.25-11-24.65-8.43-32.34-1.42a19.58,19.58,0,0,0-3.54,4.18A18.05,18.05,0,0,1,467.35,49.25Z" transform="translate(-359.39 -43.21)" />
            <polygon fill="#e53112" points="153.98 95.66 174.23 75.42 174.23 63 141.56 95.66 153.98 95.66" />
            <path fill="#010101" d="M531.52,84H371.91a12.56,12.56,0,0,0-12.52,12.52v40.69a12.55,12.55,0,0,0,12.52,12.52h56.33c13.95-1.84,13.49-28.49,21.33-33.82.59-.4,3.52-.58,4.5.14,7.64,5.63,7.3,31.86,21.12,33.68h56.33A12.55,12.55,0,0,0,544,137.18V96.49A12.56,12.56,0,0,0,531.52,84Z" transform="translate(-359.39 -43.21)" />
            <path fill="#2c9eaa" d="M431.9,127.92a11,11,0,0,1-10.95,11H380.77a11,11,0,0,1-10.95-11V105.75a11,11,0,0,1,10.95-11H421a11,11,0,0,1,10.95,11Z" transform="translate(-359.39 -43.21)" />
            <path fill="#de3c21" d="M533.62,127.92a11,11,0,0,1-11,11H482.48a11,11,0,0,1-11-11V105.75a11,11,0,0,1,11-11h40.18a11,11,0,0,1,11,11Z" transform="translate(-359.39 -43.21)" />
            <path fill="#7c7c7d" d="M369.37,87.63H534.06a12.86,12.86,0,0,1,8.72,3.43A12.56,12.56,0,0,0,531.52,84H371.91a12.54,12.54,0,0,0-11.25,7.09A12.83,12.83,0,0,1,369.37,87.63Z" transform="translate(-359.39 -43.21)" />
            <path fill="#1d1d1b" d="M384.08,155.29v4.79h-3.63V179.2h-6.1V160.08h-3.61v-4.79Z" transform="translate(-359.39 -43.21)" />
            <path fill="#1d1d1b" d="M401.32,155.29V179.2h-6.1v-10h-1.83v10h-6.11V155.29h6.11v8.55h1.83v-8.55Z" transform="translate(-359.39 -43.21)" />
            <path fill="#1d1d1b" d="M405.58,155.29h10.18v4.79h-4.07v4.53h3.81v4.55h-3.81v5.26h4.48v4.78H405.58Z" transform="translate(-359.39 -43.21)" />
            <path fill="#1d1d1b" d="M452.67,155.29V179.2h-5.34V163.06L445.2,179.2h-3.78l-2.25-15.77V179.2h-5.34V155.29h7.9c.23,1.44.48,3.14.73,5.09l.86,6.08,1.4-11.17Z" transform="translate(-359.39 -43.21)" />
            <path fill="#1d1d1b" d="M470.88,169.29a49.82,49.82,0,0,1-.17,5.1,5.68,5.68,0,0,1-1,2.74A5.62,5.62,0,0,1,467.3,179a8.57,8.57,0,0,1-3.48.66,8.68,8.68,0,0,1-3.39-.63,5.49,5.49,0,0,1-2.41-1.88,5.74,5.74,0,0,1-1.09-2.73c-.11-1-.17-2.71-.17-5.17V165.2c0-2.4.05-4.1.16-5.1a5.84,5.84,0,0,1,1.05-2.74,5.6,5.6,0,0,1,2.37-1.9,8.38,8.38,0,0,1,3.48-.67,8.68,8.68,0,0,1,3.39.63,5.63,5.63,0,0,1,2.41,1.88,5.78,5.78,0,0,1,1.09,2.73c.11,1,.17,2.71.17,5.17Zm-6.1-7.85a7.61,7.61,0,0,0-.18-2.14.73.73,0,0,0-.75-.46.82.82,0,0,0-.73.37,5.45,5.45,0,0,0-.26,2.23V172.6a11.19,11.19,0,0,0,.17,2.57.73.73,0,0,0,.77.49.75.75,0,0,0,.8-.56,11.75,11.75,0,0,0,.18-2.68Z" transform="translate(-359.39 -43.21)" />
            <path fill="#1d1d1b" d="M489.49,155.29l-3.11,23.91h-9.27l-3.53-23.91H480q1.11,9.89,1.6,16.72.47-6.91,1-12.27l.43-4.45Z" transform="translate(-359.39 -43.21)" />
            <path fill="#1d1d1b" d="M498.43,155.29V179.2h-6.1V155.29Z" transform="translate(-359.39 -43.21)" />
            <path fill="#1d1d1b" d="M502.7,155.29h10.18v4.79H508.8v4.53h3.82v4.55H508.8v5.26h4.48v4.78H502.7Z" transform="translate(-359.39 -43.21)" />
            <path fill="#1d1d1b" d="M529.79,162.53h-5.68v-1.77a3.62,3.62,0,0,0-.21-1.58.8.8,0,0,0-.73-.34.9.9,0,0,0-.83.46,2.65,2.65,0,0,0-.28,1.39,4.07,4.07,0,0,0,.31,1.8A4.74,4.74,0,0,0,524.1,164q4.08,2.46,5.13,4a9.39,9.39,0,0,1,1.06,5.1,9.09,9.09,0,0,1-.58,3.76,4.63,4.63,0,0,1-2.27,2,8.83,8.83,0,0,1-3.92.82,8.61,8.61,0,0,1-4.18-.94,4.54,4.54,0,0,1-2.27-2.41,12.47,12.47,0,0,1-.54-4.15v-1.56h5.67v2.9a3.86,3.86,0,0,0,.24,1.73.91.91,0,0,0,.85.39,1,1,0,0,0,.9-.49,2.83,2.83,0,0,0,.3-1.45,4.59,4.59,0,0,0-.56-2.76,18.16,18.16,0,0,0-2.86-2.17,28.66,28.66,0,0,1-3-2.23,5.16,5.16,0,0,1-1.22-1.92,8.46,8.46,0,0,1-.49-3.13,8.84,8.84,0,0,1,.69-4,4.69,4.69,0,0,1,2.23-2,8.67,8.67,0,0,1,3.71-.72,9.38,9.38,0,0,1,4,.79,4.21,4.21,0,0,1,2.22,2,10.61,10.61,0,0,1,.55,4Z" transform="translate(-359.39 -43.21)" />
          </svg>
        </NavLink>
        {/* <h3>The movie database</h3> */}
      </div>
      <ul>
        <li>
          <NavLink className="navlink" to={"/"}>Movies</NavLink>
        </li>
        <li>
          <NavLink className="navlink" to={"/favorite"}>Favorites</NavLink>
        </li>
        <li className='heartFavorite'> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="12px">
            <path fill="var(--first-color, currentColor)" d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"  />
          </svg>
          <p>12</p>
        </li>
      </ul>
      <InfoUser />
    </nav>
  )
}

export default Navbar