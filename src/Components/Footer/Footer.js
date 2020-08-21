import React, { Component } from 'react';

export default class Footer extends Component {

  render() {
    return (
      <footer className="mt-50">
        <div className="container-fluid">
          <div className="row">
          <div className="col-md-6">
            <h2>MovieApp</h2>
            <p>There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...</p>
          </div>
            <div className="col-md-6">
            <h2>Follow us</h2>
              <ul className="social-media list-unstyled">
                <li>
                  <a href="fake_url"><i className="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="fake_url"><i className="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href="fake_url"><i className="fab fa-youtube"></i></a>
                </li>
                <li>
                  <a href="fake_url"><i className="fab fa-twitter"></i></a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
