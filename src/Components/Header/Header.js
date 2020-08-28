import React, { Component } from 'react';
import $ from 'jquery';

import imageUser from '../../images/user.jpg'
import imageUser1 from '../../images/user1.jpg'
import imageUser2 from '../../images/user2.jpg'
import imageUser3 from '../../images/user3.jpg'

export default class Header extends Component {

  state = {
    clicked: false
  }

 componentDidMount() {
   $('.toggle-sidebar').on('click', function(){
     $('.content-area, .sidebar').toggleClass('no-sidebar');
   });
 }

 handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render(){
    return(
      <header>
        <div className="container-fluid boxs-header">

          <div className="box-right">
            <i className="fas fa-bars toggle-sidebar"></i>

          </div>

          <div className="box-notif">
    

            {/* drop notification */}
            <div className="dropdown notification notification-2 dropleft">
              <i className="far fa-bell" type="button" id="notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              </i>
              <div className="dropdown-menu dropdown-notification" aria-labelledby="notification">
                <div className="notif-header">
                  Notification<span className="number-notif">5</span>
                </div>
                <div className="notif-content">
                  <ul className="list-unstyled">
                    <li><i className="fas fa-video" /><span> <strong>New film</strong> Lorem ipsum dolor sit amet ipsum dolor sit amet.</span></li>
                    <li><i className="far fa-file-audio" /><span> Lorem ipsum dolor sit amet.</span></li>
                    <li><i className="far fa-heart" /><span> <strong>New film</strong> Lorem ipsum dolor sit amet.</span></li>
                  </ul>
                </div>
                <div className="notif-footer text-center">
                  <a href="fake_url">All Notif</a>
                </div>
              </div>
            </div>
            {/* drop notification user */}
            <div className="dropdown notification notification-user">
              <div className="box-user" type="button" id="notificationuser" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="img-user">
                  <img src={imageUser} alt="img" />
                </div>
                <div className="text-user">
                  <strong>Issaoui Rami</strong><br /><span> Member</span>
                </div>
                <i className="fas fa-ellipsis-v" />
              </div>
              <div className="dropdown-menu dropdown-notification" aria-labelledby="notificationuser">
                <div className="notif-header">
                  Issaoui Rami<span className="number-notif"><i className="fas fa-cog" /></span>
                </div>
                <div className="notif-content">
                  <ul className="list-unstyled">
                    <li><img src={imageUser1} alt="img" /><span> <strong>New film</strong> Lorem ipsum dolor.</span></li>
                    <li><img src={imageUser2} alt="img" /><span> Lorem ipsum dolor sit amet.</span></li>
                    <li><img src={imageUser3} alt="img" /><span> <strong>New film</strong> Lorem ipsum dolor sit amet.</span></li>
                  </ul>
                </div>
                <div className="notif-footer text-center">
                  <div className="row">
                    <div className="col notif-link">
                      <a href="fake_url" className="link-box"><i className="fas fa-tools" /></a>
                    </div>
                    <div className="col notif-link">
                      <a href="fake_url" className="link-box"><i className="far fa-user" /></a>
                    </div>
                    <div className="col notif-link">
                      <a href="fake_url" className="link-box"><i className="fas fa-sign-out-alt" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>

    )
  }

}
