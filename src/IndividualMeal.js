import React, { Component } from 'react';
import Food1 from './images/food1.jpg';
import Food3 from './images/food3.jpg';
import {Provider} from "react-redux";
import Bgchicken from './images/bgchicken.jpg';
import Superboss1 from'./images/superboss1.png';
import Superboss2 from'./images/superboss2.png';
import Superboss3 from'./images/superboss3.png';
import Superboss4 from'./images/superboss4.png';
import Superboss5 from'./images/superboss5.png';

import {ProductCard} from './Component/ProductCard';
export class IndividualMeal extends Component {
  state = {
    priceLow:38,
    priceMedium:79,
    priceHigh:189,
    priceSuper:199
  } 
  render() {
    let {priceLow , priceMedium , priceHigh , priceSuper} = this.state;
    return (
        <div className="container-fluid paddingTopLarge fadeIn animated">
    		<div className="container paddingTopMedium">
        		<img src={Bgchicken} alt="food"  />
                <ProductCard 
                    imageProduct={Superboss1}
                    productName="Superboss Fried Chicken Cup"  
                    productDes="SUPERBOSS Cup lets you enjoy our menu on the go: Try Chicken Littles,all served with a side of crispy,seasoned potato wedges."  
                    productPrice={priceHigh} 
                    valuePrice={()=>this.props.addPrice(priceHigh)}/>

                <ProductCard 
                    imageProduct={Superboss2}
                    productName="Superboss Grilled Chicken"  
                    productDes="SUPERBOSS Cup lets you enjoy our menu on the go: Try Chicken Littles,all served with a side of crispy,seasoned potato wedges."  
                    productPrice={priceMedium} 
                    valuePrice={()=>this.props.addPrice(priceMedium)}/>
                <ProductCard 
                    imageProduct={Superboss5}
                    productName="Superboss Chicken Nuggets"  
                    productDes="Made with white meat, our bite-sized Chicken Nuggets are tender and juicy on the inside and crispy on the outside. Coated in a homestyle seasoned breading, they are perfect for dipping in any of our delicious dipping sauces."  
                    productPrice={priceMedium} 
                    valuePrice={()=>this.props.addPrice(priceMedium)}/>
                <ProductCard 
                    imageProduct={Superboss4}
                    productName="Superboss Extra Crispy Chicken Cup"  
                    productDes="Chicken is better when it is shared. It’s a scientific fact, but don’t look it up. So grab a friend and pick up a ฿189 Chicken Share. You can share either six Superboss's Extra Crispy chicken. That’s your way you can bond!"  
                    productPrice={priceHigh} 
                    valuePrice={()=>this.props.addPrice(priceHigh)}/>
                <ProductCard 
                    imageProduct={Superboss3}
                    productName="Superboss Extra Crispy Chicken"  
                    productDes="Superboss's Extra Crispy chicken is prepared a flaky breading and marinated in a special blend of chilies & spices. LET TRY IT !!!"  
                    productPrice={priceMedium} 
                    valuePrice={()=>this.props.addPrice(priceMedium)}/>


    		</div>

      	</div>
    );
  }
}

