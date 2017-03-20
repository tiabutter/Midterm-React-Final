import React, { Component } from 'react';
import Food1 from './images/food1.jpg';
import {Provider} from "react-redux";
import Promotion1 from './images/bg-food2.jpg';
import {ProductCard} from './Component/ProductCard';
import Promo1 from './images/promo1.png';
import Promo2 from './images/promo2.png';
import Promo3 from './images/promo3.png';
import Promo4 from './images/promo4.png';
import Promo5 from './images/promo5.png';



export class Promotion extends Component {
  state = {
    priceLow:299,
    priceMedium:359,
    priceHigh:379,
    priceSuper:399,
    priceExtra:449
  } 
  render() {
    let {priceLow , priceMedium , priceHigh , priceSuper , priceExtra} = this.state;
    return (
        <div className="container-fluid paddingTopLarge fadeIn animated">
    		<div className="container paddingTopMedium">
        		<img src={Promotion1} alt="food" />
                <ProductCard 
                    imageProduct={Promo4}
                    productName="Superboss Triple Burger"  
                    productDes="Superboss Cheese Burger + Double Bossburger + Homestyle Bossburger Save your money 28฿ Come on Let's enjoy it !!!"  
                    productPrice={priceMedium} 
                    valuePrice={()=>this.props.addPrice(priceMedium)}/>
                <ProductCard 
                    imageProduct={Promo2}
                    productName="Superboss Extra Fun"  
                    productDes="Ham Extra Long Bossburger + Superboss Extra Crispy Chicken Cup + Soda Water Save your money 18฿ Just enjoy it !!!"  
                    productPrice={priceHigh} 
                    valuePrice={()=>this.props.addPrice(priceHigh)}/>
                <ProductCard 
                    imageProduct={Promo3}
                    productName="Superboss Family Set"  
                    productDes="Superboss Cheese Burger + Superboss Extra Crispy Chicken Cup + Caramel Croissant + Soda Water Save your money 17฿ Come on Let's enjoy it !!!"  
                    productPrice={priceExtra} 
                    valuePrice={()=>this.props.addPrice(priceExtra)}/>
                <ProductCard 
                    imageProduct={Promo5}
                    productName="Superboss Spicy for Us"  
                    productDes="Superboss Extra Crispy Chicken Cup + Fried Rice Spicy Beef + Soda Water and Special Mashed Potatoes by Superboss style. Save your money 34฿ Just enjoy it !!!"  
                    productPrice={priceSuper} 
                    valuePrice={()=>this.props.addPrice(priceSuper)}/>
                <ProductCard 
                    imageProduct={Promo1}
                    productName="Superboss Solo Delicious"  
                    productDes="Superboss Extra Crispy Chicken Cup + Superboss Beer and Special Mashed Potatoes by Superboss style. Save your money 19฿"  
                    productPrice={priceLow} 
                    valuePrice={()=>this.props.addPrice(priceLow)}/>
    		</div>
      	</div>
    );
  }
}

