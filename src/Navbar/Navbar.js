import React from "react";
import './Navbar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className='nav'>
        
        <li id="name">
          <Link to='/'>Jeff Thorslund</Link>
        </li>
        
        <li id="contact">
          <Link to='/contact'>contact</Link>
        </li>

        <li id="projects">
          <Link to='/projects'>projects</Link>
        </li>

        
      </ul>
    </div>
  );
};

export default Navbar;
