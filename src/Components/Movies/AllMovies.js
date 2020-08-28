import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm'
import {connect} from 'react-redux'
import Spinner from './Spinner'
import MoviesContainer from './MoviesContainer'


export class AllMovies extends Component {

  render(){
    const {loading} = this.props
    return(

      <div className="all-movies section-padding-50">
            <div className="container-fluid">
              <SearchForm />
              <div className="row box-movies section-padding-50">
                {loading ? <Spinner /> : <MoviesContainer />}
              </div>
            </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
})
export default connect(mapStateToProps)(AllMovies);
