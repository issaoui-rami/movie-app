import React, { Component } from 'react';
import { CategorieItem } from './CategorieItem.js';
import Aos from 'aos'
import 'aos/dist/aos.css'


export default class Categories extends Component {

  render() {
    return (
      <div className="categories section-padding-50">
        <h2 className="titre-h2 mb-30">Categorie</h2>
        <div className="row">
          {CategorieItem.map((item, index) => {
            return (
          <div className="col-md-2 col-lg-3 col-xl-3" key={index}>
              <div className="categorie-box">
                <a href={item.url}>
                  <img src={item.icon} alt="img" />
                  <p className="link-categorie">{item.title}</p>
                </a>
            </div>
          </div>
            )
          }
          )}
        </div>
      </div>
    )
  }
}
