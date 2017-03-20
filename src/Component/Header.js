import React, { Component } from 'react';
import {Link} from 'react-router';
import '../Font-Awesome/css/font-awesome.css';
import '../css/animate.css';
import '../bulma-css/css/bulma.css';
import '../css/style.css';
import logo from '../images/logo_superboss.png'

export class Header extends Component {
  render() {
    return (
          <nav className="nav has-shadow fadeIn animated">
            <div className="container">
              <div className="nav-left">
                <div className="nav-item">
                <Link to="Home">
                  <h4 className="font-logo">SUPERBOSS</h4>
                </Link>
                <h4 style={{marginLeft:"20px"}}>Price : <span>{this.props.totalPrice}</span> Bath</h4>
                </div>
              </div>
              <div className="nav-right">
                <Link to="Home" className="is-hidden-mobile">
                  <h5 className="colorPrimary">Home</h5>
                </Link>
                <Link to="Promotion" className="is-hidden-mobile">
                  <h5 className="colorPrimary">Promotion</h5>
                </Link>
                <Link to="GroupMeal" className="is-hidden-mobile">
                  <h5 className="colorPrimary">Drinks</h5>
                </Link>
                <Link to="IndividualMeal" className="is-hidden-mobile">
                  <h5 className="colorPrimary">Chicken</h5>
                </Link>
                <Link to="SpecialMeal" className="is-hidden-mobile">
                  <h5 className="colorPrimary">Sweets</h5>
                </Link>
                <Link to="Rice" className="is-hidden-mobile">
                  <h5 className="colorPrimary">Rice</h5>
                </Link>
                <Link to="Burgar" className="is-hidden-mobile">
                  <h5 className="colorPrimary">Burger</h5>
                </Link>
              </div>
              <span className="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
          </nav>
    );
  }
}

// export default Header;
