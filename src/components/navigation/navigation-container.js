import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavLink exact to="/" activeClassName='nav-link-actiive'>
          Home
        </NavLink>

        <NavLink to="/about-me" activeClassName='nav-link-actiive'>
          About
        </NavLink>

        <NavLink to="/contact" activeClassName='nav-link-actiive'>
          Contact
        </NavLink>

        <NavLink to="/blog" activeClassName='nav-link-actiive'>
          Blog
        </NavLink>
        {false ? <button>Add Blog</button> : null}
      </div>
    )
  }
}