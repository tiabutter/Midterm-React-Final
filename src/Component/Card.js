import React, { Component , PropTypes } from 'react';
import '../Font-Awesome/css/font-awesome.css';
import '../css/animate.css';
import '../bulma-css/css/bulma.css';
import '../css/style.css';
export class Card extends Component {
  static propTypes = {
      nameCard : PropTypes.string.isRequired,
      contentCard : PropTypes.string.isRequired,
      dateCard : PropTypes.string.isRequired,
  }
  render() {
    let {imageCard , contentCard , dateCard , nameCard} = this.props;
    return (
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image ">
                <img src={imageCard} className="img-fit-card" alt="food" />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <h1>{nameCard}</h1>
                <h3>{contentCard}</h3>
                <br />
                <small>{dateCard}</small>
              </div>
            </div>
            <div className="text-center">
              <button className="button is-info">
                Read More
              </button>
            </div>
            <div className="paddingTopMedium"></div>
          </div>
      </div>

    );
  }
}

// export default Card;
