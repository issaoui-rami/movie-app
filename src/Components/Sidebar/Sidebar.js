import React, { Component } from 'react';
import { MenuItems } from './MenuItems.js';

export default class Navbar extends Component {



  render() {
    return (
      <div className="sidebar no-sidebar">
      <div className="logo">
        MovieApp
      </div>

        <ul className="links-menus list-unstyled">
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url}>
                    <i className={item.icon}></i>
                    <span className="menu-label">{item.title}</span></a>
                </li>
              )
            }
            )}

          </ul>
    </div>

    )
  }
}
