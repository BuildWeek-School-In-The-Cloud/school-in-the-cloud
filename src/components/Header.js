import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import "../assets/css/main.css";

export default function Header() {
  return (
    <>
      <header id="header" className="alt">
        <h1>
          <NavLink to="/">School In The Cloud</NavLink>
        </h1>
        <nav id="nav">
          <ul>
            <li className="special">
              <a href="#menu" className="menuToggle">
                <span>Menu</span>
              </a>
              <div id="menu">
                <ul>
                  {/* <li><a href="index.html">Home</a></li> */}
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  {/* TODO: replace with navlinks */}
                  <li>
                    <a href="generic.html">About Us</a>
                  </li>
                  <li>
                    <a href="elements.html">Meet The Team</a>
                  </li>
                  <li>
                    <NavLink to="/signup">Sign Up</NavLink>
                  </li>
                  <li>
                    <a href="#">Log In</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

// const HomeHeader = styled.header`
//   -moz-transition: background-color 0.2s ease;
//   -webkit-transition: background-color 0.2s ease;
//   -ms-transition: background-color 0.2s ease;
//   transition: background-color 0.2s ease;
//   background: #2e3842;
//   background: transparent;
//   height: 3em;
//   left: 0;
//   line-height: 3em;
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 10000;
// `;

// const HomeHeaderH1 = styled.h1`
// 	-moz-transition: opacity 0.2s ease;
// 			-webkit-transition: opacity 0.2s ease;
// 			-ms-transition: opacity 0.2s ease;
// 			transition: opacity 0.2s ease;
// 			height: inherit;
// 			left: 1.25em;
// 			line-height: inherit;
// 			position: absolute;
// 			top: 0;
// `

// const HomeHeaderNav = styled.nav`
// 	height: inherit;
// 			line-height: inherit;
// 			position: absolute;
// 			right: 0;
// 			top: 0;
// `

// const HomeHeaderUl = styled.ul`
// list-style: none;
// 				margin: 0;
// 				padding: 0;
// 				white-space: nowrap;
// `

