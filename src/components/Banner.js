import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Banner() {
  return (
    <>
      <section id="banner">
        <div class="inner">
          <h2>School In The Cloud</h2>
          <p>
            School in the Cloud is a platform that trains senior volunteers to teach students in a group or individual setting.
          </p>
          <ul class="actions special">
            <li><NavLink to='/' class="button primary">Explore</NavLink></li>
          </ul>
        </div>
        <a href="#one" class="more scrolly">Learn More</a>
      </section>
    </>
  );
}