import React from 'react'

import {NavLink} from 'react-router-dom'

function _NavBarCP() {
  return (
    <nav className="sidenav CPNav">
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'activelink' : '')} to="/">HomePage</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'activelink' : '')} to="/classProjects/classproject1">Class Project 1</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'activelink' : '')} to="/classProjects/classproject2">Class Project 2</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'activelink' : '')} to="/classProjects/classproject3">Class Project 3</NavLink>
        </li>
      </ul> 
    </nav>
  )
}

export default _NavBarCP