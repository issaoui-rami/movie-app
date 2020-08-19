import React, { Component } from 'react';
import '../../main.js'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios'
import { Spring } from 'react-spring/renderprops'


export default class Slider extends Component {
  state= {
    slider : [],
    responsive:{
        0: {
            items: 1,
        },
        450: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
}
componentDidMount() {
  axios.get("./data/data.json")
  .then(res => {
    this.setState({
      slider: res.data.slider
    })
  })

}



render(){

      return (

          <Spring
            from={{opacity:0, marginLeft: -500}}
            to={{opacity:1, marginLeft: 0}} >
            {props => (
              <div style={props}>
                  <div className="slider">
                    <div className="container">

                    {this.state.slider.length && (
                      <OwlCarousel
                      className="owl-theme banner-home"
                      loop
                      dots
                      margin= {10}
                      responsive={this.state.responsive}
                      >

                      {this.state.slider.map((sliderItem, index) =>
                        <div className="item" key={sliderItem.id}>
                          <div className="desc-owl">
                            <p className="sub-title">Most Popular</p>
                            <div className="btn-tag">
                              <a href="fake_url">{sliderItem.themes.theme1}</a>
                              <a href="fake_url">{sliderItem.themes.theme2}</a>
                              <a href="fake_url">{sliderItem.themes.theme3}</a>
                            </div>
                            <div className="text-desc">
                              <h1>{sliderItem.titre}</h1>
                              <p className="label-desc">
                                <span>{sliderItem.acteurs.acteur1}</span>
                                <span>{sliderItem.acteurs.acteur2}</span>
                              </p>
                              <p className="text-long">{sliderItem.desc}</p>
                              <a href="fake_url" className="btn-carousel"><i className="fas fa-play"></i>Watch Noww</a>
                            </div>
                          </div>
                          <img src={sliderItem.image} alt="img" />
                        </div>
                      )}
                      </OwlCarousel>
                    )}
                  </div>
                  </div>

                  </div>
            )}
          </Spring>
      )
  }
}
