import React, { Component } from 'react';
import Recomended from '../Recomended/Recomended.js'
import Trending from '../Trending/Trending.js'
import Categories from '../Categories/Categories.js'

export default class Content extends Component {

  render(){
    return(

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <Categories />
            </div>
            <div className="col-lg-9 col-md-12">
              <Recomended />
              <Trending />
            </div>
          </div>
        </div>
      </section>

    )
  }

}
