import React, { Component } from 'react';
import { MenuItems } from './MenuItems.js';
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {



  render() {
    return (
      <div className="sidebar no-sidebar">
      <div className="logo">
        <NavLink exact to="/">MovieApp</NavLink>
      </div>

        <ul className="links-menus list-unstyled">
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink exact to={item.url}>
                    <img src={item.icon} alt="img" />
                    <span className="menu-label">{item.title}</span>
                  </NavLink>
                </li>
              )
            }
            )}

          </ul>
    </div>

    )
  }
}
