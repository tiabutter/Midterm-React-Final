import React, { Component } from 'react';
import Food1 from './images/food1.jpg';
import Food5 from './images/food5.jpg';
import Bg from './images/bgrice.jpg';
import {Provider} from "react-redux";
import Rice1 from './images/rice1.png';
import Rice2 from './images/rice2.png';
import Rice3 from './images/rice3.png';

import {ProductCard} from './Component/ProductCard';
export class Rice extends Component {
  state = {
    priceLow:125,
    priceMedium:145,
    priceHigh:165,
    priceSuper:199
  } 
  render() {
    let {priceLow , priceMedium , priceHigh , priceSuper} = this.state;
    return (
        <div className="container-fluid paddingTopLarge fadeIn animated">
    		<div className="container paddingTopMedium">
        		<img src={Bg} alt="food" />
                <ProductCard 
                    imageProduct={Rice1}
                    productName="Rice Topped with Chicken"  
                    productDes="Superboss style, loaded with fried chicken vegetable and serves with. jasmine rice."  
                    productPrice={priceMedium} 
                    valuePrice={()=>this.props.addPrice(priceMedium)}/>
                <ProductCard 
                    imageProduct={Rice2}
                    productName="Fried Rice Spicy Beef"  
                    productDes="Fried Rice Spicy loaded with kobe beef !!! and vegetable Special formula of Superboss."  
                    productPrice={priceHigh} 
                    valuePrice={()=>this.props.addPrice(priceHigh)}/>
                <ProductCard 
                    imageProduct={Rice3}
                    productName="Rice Topped with Sliced Pork"  
                    productDes="Superboss style, loaded with kurobuta pork vegetable and serves with garlic rice."  
                    productPrice={priceMedium} 
                    valuePrice={()=>this.props.addPrice(priceMedium)}/>

    		</div>

      	</div>
    );
  }
}

