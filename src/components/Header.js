import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
    <header id="header" class="alt">
      <h1><NavLink to="/">School In The Cloud</NavLink></h1>
      <nav id="nav">
        <ul>
          <li class="special">
            <a href="#menu" class="menuToggle"><span>Menu</span></a>
            <div id="menu">
              <ul>
                {/* <li><a href="index.html">Home</a></li> */}
                <li><NavLink to="/">Home</NavLink></li>
                {/* TODO: replace with navlinks */}
                <li><a href="generic.html">About Us</a></li>
                <li><a href="elements.html">Meet The Team</a></li>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Log In</a></li>
              </ul>
              </div>
            </li>
          </ul>
      </nav>
    </header>
    </>
  );
}