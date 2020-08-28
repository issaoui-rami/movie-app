import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MovieCard extends Component {

  render(){

  const {movie} = this.props;
  return(
    <div className="col-lg-2 col-md-3">
      <div className="movie-item mb-30">
        <Link to={'/detailsmovie/' + movie.imdbID} >
            <div className="img-film"><img src={movie.Poster} alt="Movie Cover" /></div>
              <div className="rating">
                <span><i className="fa fa-star"></i></span>
                <span>.0</span>
              </div>
            <div className="boxs-info">
              <div className="title">{movie.Title}</div>
                <div className="view-film">
                  <div className="annee">
                    <span>{movie.Year}</span>
                  </div>
                  <div className="time-film">{movie.Type}</div>
              </div>
            </div>
        </Link>
      </div>
    </div>
    )
  }
}



export default MovieCard;
