import React, { Component } from 'react';
import Recomended from '../Recomended/Recomended.js'
import Trending from '../Trending/Trending.js'
import Channel from '../Channel/Channel.js'

export default class Content extends Component {

  render(){
    return(

      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <Recomended />
              <Trending />
            </div>
            <div className="col-lg-3 col-md-12">
              <Channel />
            </div>
          </div>
        </div>
      </section>

    )
  }

}
