import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Actors from '../Actors/Actors';
import Categories from '../Categories/Categories'
import MovieCard from './MovieCard'
import Movies from './Movies'
import {APIKey} from '../../APIKey.js'
import axios from 'axios'



export default class MovieCategorie extends Component {

  state= {
    movies : [],
  }

  componentDidMount() {
    const urlCat = this.props.match.params.text;
    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${urlCat}`)
    .then(res => {
      this.setState({
        movies: res.data.Search
      })
    })
  }

  render(){
    return(
      <React.Fragment>
        <Categories />
        <div className="row box-movies mt-50">
            {this.state.movies.map(movieItem =>
                <div className="col-lg-2 col-md-3" key={movieItem.imdbID}>
                  <div className="movie-item mb-30">
                    <Link to={'/detailsmovie/' + movieItem.imdbID} >
                        <div className="img-film"><img src={movieItem.Poster} alt="Movie Cover" /></div>
                          <div className="rating">
                            <span><i className="fa fa-star"></i></span>
                            <span>.0</span>
                          </div>
                        <div className="boxs-info">
                          <div className="title">{movieItem.Title}</div>
                            <div className="view-film">
                              <div className="annee">
                                <span>{movieItem.Year}</span>
                              </div>
                              <div className="time-film">{movieItem.Type}</div>
                          </div>
                        </div>
                    </Link>
                  </div>
                </div>
            )}
      </div>
    </React.Fragment>

    )
  }
}
