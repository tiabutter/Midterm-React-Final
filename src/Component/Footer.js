import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
        <div className="footer">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h3>MANCH</h3>
                  <p className="paddingTopMedium">We are driven by uncompromising freshness and quality, gracious hospitality and a growing
                  list
                  of restaurants.</p>
              </div>
              <div className="column">
                <h3>LOCATION</h3>
                <address className="addr paddingTopMedium">4578 Marmora Road, Glasgow D04 89GR</address>
                <p>
                  <a href="#" className="colorPrimary">800-2345-678</a>
                </p>
              </div>
              <div className="column">
                <h3>OPEN HOURS</h3>
                <ul className="paddingTopMedium">
                  <li><h5>Mondays : <span>Closed</span></h5></li>
                  <li><h5>Tue-Fri : <span>0am - 12am</span></h5></li>
                  <li><h5>Sat-Sun : <span>7am - 1am</span></h5></li>
                  <li><h5>Public Holidays : <span>12pm - 12am</span></h5></li>
                </ul>
              </div>
              <div className="column">
                <h3>CONTACT US</h3>
                <ul className="paddingTopMedium">
                  <li>
                    <a href="#" className="colorPrimary"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                  </li>
                  <li>
                    <a href="#" className="colorPrimary"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                  </li>
                  <li>
                    <a href="#" className="colorPrimary"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

    );
  }
}

// export default Footer;
