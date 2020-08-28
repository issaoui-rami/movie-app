import React from 'react'
import {Provider} from 'react-redux'
import { BrowserRouter, Route, HashRouter as Router } from 'react-router-dom'
import './sass/main.scss'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Sidebar from './Components/Sidebar/Sidebar.js'
import Header from './Components/Header/Header.js'
import Content from './Components/Contents/Content.js'
import Footer from './Components/Footer/Footer.js'
import MovieCategorie from './Components/Movies/MovieCategorie.js'
import AllMovies from './Components/Movies/AllMovies.js'
import DetailsMovie from './Components/Movies/DetailsMovie.js'

import store from './store.js'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App page home-page">
          <Sidebar />
          <div className="content-area container-fluid">
            <Header />
            <Route exact path="/" component={Content} />
            <Route exact path="/allmovies" component={AllMovies} />
            <Route exact path="/detailsmovie/:id" component={DetailsMovie} />
            <Route exact path="/moviecategorie/:text" component={MovieCategorie} />
            <Footer />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
