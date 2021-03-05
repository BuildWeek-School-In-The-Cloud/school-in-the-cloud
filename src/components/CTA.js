import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function CTA () {
    return(
        <HeroImg id="cta" className="wrapper style4">
            <div className="inner">
              <header>
                <h2>Arcue ut vel commodo</h2>
                <p>
                  Aliquam ut ex ut augue consectetur interdum endrerit imperdiet
                  amet eleifend fringilla.
                </p>
              </header>
              <ul className="actions stacked">
                {/* <li><a href="#" className="button fit primary">Explore</a></li> */}
                <li><NavLink to="#" activeclassName="button fit primary">Explore</NavLink></li>
                {/* <li><a href="#" className="button fit">Learn More</a></li> */}
                <li><NavLink to="#" activeclassName="button fit">Learn More</NavLink></li>
              </ul>
            </div>
          </HeroImg>
    )
}

const HeroImg = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
  height: auto;
  padding: 6% 0% 6% 0% ;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display:flex;
  justify-content:center;
`;