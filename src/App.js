import React, { Component } from 'react';
import './Font-Awesome/css/font-awesome.css';
import './css/animate.css';
import './bulma-css/css/bulma.css';
import './bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'; 
import {Provider} from "react-redux";
import {Header} from './Component/Header';
import {Footer} from './Component/Footer';
import {connect} from 'react-redux';
class App extends Component {

  render() {
    return (
      <div className="Body">
        <Header totalPrice={this.props.user.result}/>  

          { React.Children.map(this.props.children, child => React.cloneElement(child, {...this.props}))}

        <div className="clearfix spaceBottomLarge"></div>
        <Footer />
      </div>
    );
  }
}
const mapStatetoProps=(state)=>{
    return {
      user:state.user
    };
}
const mapDispatchtoProps=(dispatch)=>{
    return {
      addPrice:(price)=>{
        dispatch({
          type:"addPrice",
          payload:price
        })
      }
    };
}

export default connect(mapStatetoProps,mapDispatchtoProps)(App);
