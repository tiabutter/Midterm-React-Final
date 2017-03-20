import React, { Component } from 'react';

export class SliderImage extends Component {
	constructor(props) {
    super(props);
	    this.state = {
	      numItem:'1',
	      imageItem:"imageItem",
	    }
	    this.handleChangePicture = this.handleChangePicture.bind(this);
    }

    handleChangePicture = (event) => {
      this.setState({
        numItem:event.target.value,
        imageItem : "imageItem",
      });
	  }
    showItem = (numItem) =>{
      return(
          this.state.imageItem + numItem
      );
  	}
	render() {
    let { numItem } = this.state;
    return (
    	<div className="column">
          <div id="#item1" className={this.showItem(numItem) + " " + "fadeIn" + " " + "animated"}>
          </div>
          <ul className="absoulteUl">
            <li><button className="btn-slider" value={1} onClick={this.handleChangePicture.bind(numItem)}></button></li>
            <li><button className="btn-slider" value={2} onClick={this.handleChangePicture.bind(numItem)}></button></li>
            <li><button className="btn-slider" value={3} onClick={this.handleChangePicture.bind(numItem)}></button></li>
          </ul>
      </div>
	);
}
}
export default SliderImage;
