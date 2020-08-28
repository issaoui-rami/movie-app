import React, { Component } from 'react';
import { CategorieItem } from './CategorieItem.js';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';


export default class Categories extends Component {

  state= {
    responsive:{
        0: {
            items: 3.8,
        },
        768: {
            items: 6,
        },
        1000: {
            items: 8,
        }
    },
  }


  render() {
    return (
      <div className="col-lg-12 categories">
          <OwlCarousel
              className="owl-theme1"
              loop
              nav
              margin= {30}
              responsive={this.state.responsive}
              >

              {CategorieItem.map((item, index) => {
                return (
                  <div className="item" key={index}>
                      <div className="categorie-box">
                        <Link to={'/moviecategorie/' + item.url} >
                          <img src={item.icon} alt="img" />
                          <p className="link-categorie">{item.title}</p>
                      </Link>
                    </div>
                  </div>
                )
            }
            )
          }
        </OwlCarousel>

      </div>
    )
  }
}
