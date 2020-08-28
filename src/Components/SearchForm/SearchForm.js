import React, { Component } from 'react'
import {connect} from 'react-redux'
import {searchMovie, fetchMovies, setLoading} from '../../actions/searchActions'
import $ from 'jquery'

class SearchForm extends Component {

  onChange = e => {
    this.props.searchMovie(e.target.value);
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text)
    this.props.setLoading();
  }
  componentDidMount() {
    $('.toggleSearch').on('click', function(){
      $('.search-movie').toggleClass('active-input');
    });
  }

  render() {
    return (
      <form className="active-cyan-2" onSubmit= {this.onSubmit}>
        <input className="form-control search-movie"
        type="text"
        placeholder="Search for a movie, TV series..."
        aria-label="Search"
        onChange= {this.onChange}
        />
        <i className="fas fa-search toggleSearch" aria-hidden="true"></i>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
})

export default connect(
  mapStateToProps, {searchMovie, fetchMovies, setLoading}
)(SearchForm);
