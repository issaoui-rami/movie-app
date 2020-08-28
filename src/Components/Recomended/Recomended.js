import React, { Component } from 'react';
import '../../main.js'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default class Recomended extends Component {
  state= {
    moviesRecomended : [],
    responsive:{
        0: {
            items: 1,
            stagePadding: 50,
        },
        768: {
            items: 2,
            stagePadding: 50,
        },
        1000: {
            items: 6,
        }
    },
  }



  componentDidMount() {
    axios.get("./data/data.json")
    .then(res => {
      this.setState({
        moviesRecomended: res.data.moviesRecomended
      })
    })

    Aos.init({ duration: 2000});
  }


  render(){
    return(
            <div className="recomended section-padding-50"
              data-aos="fade-up"
              data-aos-offset="5"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              >
              <div className="container-fluid">
                <h2 className="titre-h2 mb-30">Recomended</h2>
              {this.state.moviesRecomended.length && (
                <OwlCarousel
                    className="owl-theme1 owl-carousel-4"
                    loop
                    nav
                    lazyLoad
                    margin= {30}
                    stagePadding= {100}
                    responsive={this.state.responsive}
                    >

                    {this.state.moviesRecomended.map(movieItem =>
                      <div className="item" key={movieItem.id}>
                        <a href="fake_url">
                            <div className="img-film"><img src={movieItem.image} alt="img" /></div>
                              <div className="rating">
                                <span><i className="fa fa-star"></i></span>
                                <span>{movieItem.avis}.0</span>
                              </div>
                            <div className="boxs-info">
                              <div className="title">{movieItem.titre}</div>
                                <div className="view-film">
                                  <div className="annee">
                                    <span>{movieItem.annee}</span>
                                  </div>
                                  <div className="time-film">{movieItem.time}</div>

                              </div>
                            </div>
                        </a>
                      </div>
                  )}

                </OwlCarousel>
              )}

              </div>
            </div>

    )
  }

}
