import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Navbar.scss'

function Navbar() {
  return (
    <nav>
        <ul>
            <li> 
                <a href="#" className='active'>Home</a> 
            </li>
            <li> 
                <a href="#">TV Shows</a> 
            </li>
            <li> 
                <a href="#">Movies</a> 
            </li>
            <li> 
                <a href="#">Recently Added</a> 
            </li>
            <li> 
                <a href="#">My List</a> 
            </li>
        </ul>
        
    </nav>
  )
}

export default Navbar