import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import "../assets/css/main.css";

export default function Header() {
  return (
    <>
      <HomeHeader id="header" className="alt">
        <h1>
          <NavLink to="/">School In The Cloud</NavLink>
        </h1>
        <HomeHeaderNav id="nav">
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/signup">Sign Up</NavLink>
                  </li>
                  <li>
                  <NavLink to="/login">Log In</NavLink>
                  </li>
                </ul>
        </HomeHeaderNav>
      </HomeHeader>
    </>
  );
}

const HomeHeader = styled.header`
  -moz-transition: background-color 0.2s ease;
  -webkit-transition: background-color 0.2s ease;
  -ms-transition: background-color 0.2s ease;
  transition: background-color 0.2s ease;
  background: #2e3842;
  background: transparent;
  height: 3em;
  left: 0;
  line-height: 3em;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10000;
`;

const HomeHeaderNav = styled.nav`
	height: inherit;
			line-height: inherit;
			position: absolute;
			right: 0;
			top: 0;
`
