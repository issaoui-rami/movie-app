import React, { Component } from 'react'
import '../../main.js'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios'
import 'aos/dist/aos.css'

export default class Actors extends Component {

  state= {
    actors : [],
    responsive:{
        0: {
            items: 2,
        },
        768: {
            items: 2,
            stagePadding: 50,
        },
        1000: {
            items: 10,
        }
    },
  }

  componentDidMount() {
    axios.get("./data/data.json")
    .then(res => {
      this.setState({
        actors: res.data.actors
      })
    })
  }

  render() {
    return (
      <div className="actors mt-50">
        <h2 className="titre-h2 mb-30">Cast & Crew</h2>
        {this.state.actors.length && (
          <OwlCarousel
          className="owl-theme1 owl-carousel-4"
          loop
          nav
          margin= {30}
          responsive={this.state.responsive}
          >
          {this.state.actors.map(actorItem =>
            <div className="item" key={actorItem.id}>
              <img src={actorItem.image} alt="actor" />
              <p className="actor-name">{actorItem.name}</p>
            </div>
          )}
        </OwlCarousel>
        )}
      </div>
    )
  }

}
