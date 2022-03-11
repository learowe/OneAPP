import React from 'react'

import {NavLink} from 'react-router-dom'

function _NavBarHW() {
  return (
    <nav className="sidenav HWNav">
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'activelink' : '')} to="/">HomePage</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'activelink' : '')} to="/homeWork/Week9Homework">Week9Homework</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'activelink' : '')} to="/homeWork/homework2">Homework 2</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'activelink' : '')} to="/homeWork/homework3">Homework 3</NavLink>
        </li>
      </ul>  
    </nav>
  )
}

export default _NavBarHW