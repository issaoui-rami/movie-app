import React, { Component } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

import imgChannel1 from '../../images/channel/ch1.png'
import imgChannel2 from '../../images/channel/ch2.png'
import imgChannel3 from '../../images/channel/ch3.png'

export default class Channel extends Component {

  componentDidMount() {
    Aos.init({ duration: 2000});
  }

  render(){
    return(
      <div className="channel"
        data-aos="fade-up"
        data-aos-offset="5"
        data-aos-delay="1000"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="container">
          <h2 className="titre-h2 mb-30">Top Channel</h2>
          <div className="row boxs-channel">
            <div className="col-md-3">
              <img src={imgChannel1} alt="img" />
            </div>
            <div className="col-md-9">
              <div className="title">Chanel M6</div>
              <div className="subscriber"><span>20M Subscriber</span></div>
            </div>
          </div>

          <div className="row boxs-channel">
            <div className="col-md-3">
              <img src={imgChannel2} alt="img" />
            </div>
            <div className="col-md-9">
              <div className="title">Chanel .2</div>
              <div className="subscriber"><span className="active">12M Subscriber</span></div>
            </div>
          </div>

          <div className="row boxs-channel">
            <div className="col-md-3">
              <img src={imgChannel3} alt="img" />
            </div>
            <div className="col-md-9">
              <div className="title">Chanel .3</div>
              <div className="subscriber"><span>11M Subscriber</span></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
