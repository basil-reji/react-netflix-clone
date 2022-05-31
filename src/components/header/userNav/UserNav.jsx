import React from 'react'
import './UserNav.scss'
import {faSearch, faBell} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserIcon from './user/UserIcon'

function UserNav() {
  return (
    <div className='userNav'>
        <ul>
            <li> 
                <FontAwesomeIcon className='FontAwesomeIcon' icon={faSearch}/> 
            </li>
            <li>
                <a href="#">KIDS</a>
            </li>
            <li>
                <a href="#">DVD</a>
            </li>
            <li>
                <FontAwesomeIcon className='FontAwesomeIcon' id='bell' icon={faBell}/>
                <div className="notifications">9+</div>
            </li>
        </ul>
        <UserIcon/>
    </div>
  )
}

export default UserNav