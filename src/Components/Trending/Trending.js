import React, { Component } from 'react';
import '../../main.js'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios'
import ReactStars from "react-rating-stars-component";
import Aos from 'aos'
import 'aos/dist/aos.css'


const ratingChanged = (newRating) => {
  console.log(newRating);
};

export default class Trending extends Component {

  state= {
    moviesTrending : [],
    responsive:{
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 4,
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
        <div className="container">
          <h2 className="titre-h2 mb-30">Trending</h2>

        {this.state.moviesTrending.length && (
          <OwlCarousel
          className="owl-theme1 owl-carousel-4"
          loop
          nav
          margin= {30}
          responsive={this.state.responsive}
          >

          {this.state.moviesTrending.map(movieItem =>
            <div className="item" key={movieItem.id}>
              <a href="fake_url">
              <img src={movieItem.image} alt="img" />
              <div className="time-film">{movieItem.time}</div>
              <div className="boxs-info">
                <div className="title">{movieItem.titre}</div>
                <div className="view-film rating">
                  <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  value={parseInt(movieItem.avis, 10)}
                  edit={false}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ff744f"
                /></div>

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
