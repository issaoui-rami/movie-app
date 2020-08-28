import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Actors from '../Actors/Actors';
import { fetchMovie, setLoading } from '../../actions/searchActions';

import Spinner from './Spinner';

export class DetailsMovie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, movie } = this.props;

    let movieInfo = (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-md-4">
              <div className="box-cover">
                <img src={movie.Poster} className="cover" alt="Poster" />
                <a
                  href={'https://www.imdb.com/title/' + movie.imdbID}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-stream"
                >
                <i className="fas fa-play"></i>  Stream Movie
                </a>
                <Link to="../allmovies" className="btn-retour">
                  <i className="fas fa-angle-left"></i> Go Back To list
                </Link>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 details-list">
              <h2 className="mb-4">{movie.Title}</h2>
              <div className="header-box">
                <ul>
                  <li>
                    <strong>IMDB Rating :</strong><i className="fas fa-star"></i> {movie.imdbRating}<span className="sur10">/10</span>
                  </li>
                  <li>
                    <strong>Language :</strong> {movie.Language}
                  </li>
                  <li>
                    <strong>Released :</strong> {movie.Released}
                  </li>
                </ul>
              </div>
              <div className="content-box mt-30 mb-30">
                <p>{movie.Plot}</p>
              </div>
              <ul className="list-group more-info">
                <li>
                  <strong>Genre :</strong> {movie.Genre}
                </li>
                <li>
                  <strong>Runtime :</strong> {movie.Runtime}
                </li>
                <li>
                  <strong>Director :</strong> {movie.Director}
                </li>
                <li>
                  <strong>Writer :</strong> {movie.Writer}
                </li>
                <li>
                  <strong>Actors :</strong> {movie.Actors}
                </li>
              </ul>
            </div>
            <div className="col-lg-12">
              <Actors />
            </div>
          </div>
        </div>
    );

    let content = loading ? <Spinner /> : movieInfo;
    return <section className="page details section-padding-50">{content}</section>;
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movies
});

export default connect(
  mapStateToProps,
  { fetchMovie, setLoading }
)(DetailsMovie);
