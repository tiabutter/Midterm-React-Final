import React, { Component , PropTypes } from 'react';
import {Link} from 'react-router';
export class BoxPage extends Component {
  static PropTypes = {
     classColor:PropTypes.string.isRequired,
     classIcon:PropTypes.string.isRequired,
     namePage:PropTypes.string.isRequired,
     linkPage:PropTypes.string.isRequired
  }
  render() {
    let {classColor , classIcon , namePage ,linkPage } = this.props;
    return (
        <div className="col-md-4 paddingTopMedium">
          <Link to={linkPage}>
            <div className={classColor + " " + "notification is-info has-text-centered paddingTopMedium"}>
              <span className="icon is-large">
                <i className={classIcon + " " + "fa"} aria-hidden="true"></i>
              </span>
              <h3 className="paddingTopMedium">{namePage}</h3>
              <h4 className="paddingTopMedium">Read More</h4>
              <div className="spaceBottomMedium"></div>
            </div>
          </Link>
        </div>

    );
  }
}

// export default Card;
