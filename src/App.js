import React from 'react';
import './sass/main.scss';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Sidebar from './Components/Sidebar/Sidebar.js'
import Header from './Components/Header/Header.js'
import Slider from './Components/Slider/Slider.js'
import Content from './Components/Contents/Content.js'
import Footer from './Components/Footer/Footer.js'

function App() {
  return (
    <div className="App page home-page">
      <Sidebar />
      <div className="content-area container-fluid">
        <Header />
        <Slider />
        <Content />
        <Footer />
      </div>

    </div>

  );
}

export default App;
