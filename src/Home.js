import React, { Component } from 'react';
import './Font-Awesome/css/font-awesome.css';
import './css/animate.css';
import './bulma-css/css/bulma.css';
import './css/style.css';
import {Header} from './Component/Header';
import {Footer} from './Component/Footer';
import {SliderImage} from './Component/SliderImage';
import {Card} from './Component/Card';
import {BoxPage} from './Component/BoxPage';
import Food1 from './images/food1.jpg';
import Food2 from './images/food2.jpg';
import Food3 from './images/food3.jpg';
import Food4 from './images/food4.jpg';

export class Home extends Component {

  render() {
    return (
        <div className="container paddingTopLarge">
          <div className="columns">
              <SliderImage />
          </div>
          <div className="container">
            <div className="row" style={{width:"100%"}}>
              <BoxPage classColor="is-success" classIcon="fa-gift" namePage="PROMOTION" linkPage="Promotion" />
              <BoxPage classColor="is-danger" classIcon="fa-users" namePage="GROUP MEALS" linkPage="GroupMeal"/>
              <BoxPage classColor="is-info" classIcon="fa-user-o" namePage="INDIVIDUAL MEALS" linkPage="IndividualMeal"/>
              <BoxPage classColor="is-warning" classIcon="fa-shopping-bag" namePage="SPEACIAL MEALS" linkPage="SpecialMeal"/>
              <BoxPage classColor="is-danger" classIcon="fa-cutlery" namePage="RICE" linkPage="Rice"/>
              <BoxPage classColor="is-warning" classIcon="fa-bars" namePage="BURGAR" linkPage="Burgar"/>
            </div>

          <div className="spaceBottomLarge"></div>
          </div>
        </div>
    );
  }
}

