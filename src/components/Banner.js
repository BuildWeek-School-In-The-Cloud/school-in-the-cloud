import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Banner() {
  return (
    <>
      <HeroImg id="banner">
        <div class="inner">
          <h2>School In The Cloud</h2>
          <p>
            School in the Cloud is a platform that trains senior volunteers to
            teach students in a group or individual setting.
          </p>
          <ul class="actions special">
            <li>
              <NavLink to="/" class="button primary">
                Explore
              </NavLink>
            </li>
          </ul>
        </div>
        <a href="#one" class="more scrolly">
          Learn More
        </a>
      </HeroImg>
    </>
  );
}

const HeroImg = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;
