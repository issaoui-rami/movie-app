import React, { Component } from 'react';
import Slider from '../Slider/Slider.js'
import Recomended from '../Recomended/Recomended.js'
import Trending from '../Trending/Trending.js'

export default class Content extends Component {

  render(){
    return(

      <section className="content">
        <Slider />
        <Recomended />
        <Trending />
      </section>

    )
  }

}
