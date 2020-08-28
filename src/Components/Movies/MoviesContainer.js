import React, { Component } from 'react';

import {connect} from 'react-redux'
import MovieCard from './MovieCard'
import Movies from './Movies'

export class MoviesContainer extends Component {

  render(){
    const {movies} = this.props;
    let content = '';

    content = movies.Response === 'True' ? movies.Search.map((movie, index) => <MovieCard key={index} movie={movie} />) : <Movies /> ;
    return(
      <React.Fragment>
        {content}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
})

export default connect(mapStateToProps)(MoviesContainer);
