import React from 'react';

import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="content">
      <h1>HomePage</h1>
      <a href="https://www.reactrouter.com/" target="_blank">
        React Router V6 Docs
      </a>
      <br />
      <br />
      <a
        href="https://ultimatecourses.com/blog/active-navlink-inline-styles-with-react-router"
        target="_blank"
      >
        Docs on NavLinks
      </a>
      <br />
      <br />
      <a href="https://youtu.be/k2Zk5cbiZhg" target="_blank">
        YouTube Video of Router V6
      </a>
      <nav className="homePageNav">
        <ul>
          <li>
            <NavLink to="/classMaterial/Week9PrimeForms">Class Material</NavLink>
          </li>
          <li>
            <NavLink to="/classProjects/Week9PrimeFormSolo">Class Projects</NavLink>
          </li>
          <li>
            <NavLink to="/homeWork/Week9Homework">Homework</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
