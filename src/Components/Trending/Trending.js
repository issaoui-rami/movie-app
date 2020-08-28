import React, { Component } from 'react';
import '../../main.js'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios'
import Aos from 'aos'
import 'aos/dist/aos.css'



export default class Trending extends Component {

  state= {
    moviesTrending : [],
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
        moviesTrending: res.data.moviesTrending
      })
    })

    Aos.init({ duration: 2000});
  }

  render(){
    return(
      <div className="Trending section-padding-50-0"
        data-aos="fade-up"
        data-aos-offset="5"
        data-aos-delay="1500"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="container-fluid">
          <h2 className="titre-h2 mb-30">Trending</h2>

        {this.state.moviesTrending.length && (
          <OwlCarousel
          className="owl-theme1 owl-carousel-4"
          loop
          nav
          margin= {30}
          stagePadding= {100}
          responsive={this.state.responsive}
          >

          {this.state.moviesTrending.map(movieItem =>
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
