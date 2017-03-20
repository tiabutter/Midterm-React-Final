import React, { Component , PropTypes } from 'react';
export class ProductCard extends Component {
  static propTypes = {
    imageProduct:PropTypes.string.isRequired,
    productName:PropTypes.string.isRequired,  
    productDes:PropTypes.string.isRequired,  
    productPrice:PropTypes.number.isRequired,
    valuePrice:PropTypes.func.isRequired
  }
  render() {
    let {imageProduct , productName , productDes , productPrice ,valuePrice} = this.props;
    return (
        <div className="col-md-6 paddingTopMedium">
            <div className="jumbotron">
                <div className="container">
                    <div className="col-md-6">
                        <img src={imageProduct} alt="food" className="img-fit-card" style={{borderRadius:"20px"}} />
                    </div>
                    <div className="col-md-6">
                      <div className="container">
                        <h2 className="text-center">{productName}</h2>
                        <small>{productDes}</small>
                        <div className="col-md-6">
                          <div className="row" style={{marginTop: "17px"}}>
                            <h4>฿{productPrice}.00</h4>
                          </div>
                        </div>
                        <div className="col-md-6">
                            <button className="button is-primary is-large" 
                                    style={{marginTop: "20px"}}
                                    onClick={valuePrice}>Add to Cart
                            </button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>

    );
  }
}
