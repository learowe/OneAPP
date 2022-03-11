import React from 'react'

import {NavLink} from 'react-router-dom'

function _NavBarCM() {
  return (
    <nav className="sidenav CMNav">
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'activelink' : '')} to="/">HomePage</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'activelink' : '')} to="/classMaterial/classmaterial1">Class Material 1</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'activelink' : '')} to="/classMaterial/classmaterial2">Class Material 2</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'activelink' : '')} to="/classMaterial/classmaterial3">Class Material 3</NavLink>
        </li>
      </ul>  
    </nav>
  )
}

export default _NavBarCM