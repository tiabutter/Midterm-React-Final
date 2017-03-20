import React, { Component } from 'react';
import Food1 from './images/food1.jpg';
import Food4 from './images/food4.jpg';
import {Provider} from "react-redux";
import Bgspecial from './images/bgspecial.jpg';
import Special1 from './images/special1.png';
import Special2 from './images/special2.png';
import Special3 from './images/special3.png';
import Special4 from './images/special4.png';
import Special5 from './images/special5.png';
import Special6 from './images/special6.png';
import Special7 from './images/special7.png';

import {ProductCard} from './Component/ProductCard';
export class SpecialMeal extends Component {
  state = {
    priceLow:49,
    priceMedium:79,
    priceHigh:129,
    priceSuper:199
  } 
  render() {
    let {priceLow , priceMedium , priceHigh , priceSuper} = this.state;
    return (
        <div className="container-fluid paddingTopLarge fadeIn animated">
    		<div className="container paddingTopMedium">
        		<img src={Bgspecial} alt="food" />
                <ProductCard 
                    imageProduct={Special3}
                    productName="Combo Milk&Choco Ice Cream"  
                    productDes="Superboss have vanilla, chocolate and green tea Ice Cream flavor."  
                    productPrice={priceMedium} 
                    valuePrice={()=>this.props.addPrice(priceMedium)}/>
                <ProductCard 
                    imageProduct={Special4}
                    productName="Combo Mixed Fruit Ice Cream"  
                    productDes="Superboss have banana, mango and mixed beryr Ice Cream flavor."  
                    productPrice={priceMedium} 
                    valuePrice={()=>this.props.addPrice(priceMedium)}/>
                <ProductCard 
                    imageProduct={Special1}
                    productName="Egg Tart Strawberry"  
                    productDes="Discover pleasure in every bite with Superboss Egg Tart. Made from an authentic recipe hailing from Macau, savour the custard, so smooth, creamy topped with Strawberry. It just melts in your mouth. The flaky yet fluffy pastry is simply irresistible"  
                    productPrice={priceLow} 
                    valuePrice={()=>this.props.addPrice(priceLow)}/>
                <ProductCard 
                    imageProduct={Special6}
                    productName="Superboss Cup Cake"  
                    productDes="Is a small cake designed to serve for you, which baked in a small thin paper. savour the custard, so smooth, creamy topped with Strawberry. The cake batter used for cupcakes flavored or have other ingredients stirred in, such as berries. LET TRY IT !!!"  
                    productPrice={priceLow} 
                    valuePrice={()=>this.props.addPrice(priceLow)}/>
                <ProductCard 
                    imageProduct={Special2}
                    productName="La Baguette French"  
                    productDes="When you walk through the doors of Superboss, the first thing you notice is the fragrance – a warm, wonderful, can’t-wait-to-eat-this smell that beckons you in. It lingers in our bakery case, where you’ll find an array of chocolaty, fruity, sugary goodness."  
                    productPrice={priceLow} 
                    valuePrice={()=>this.props.addPrice(priceLow)}/>
                <ProductCard 
                    imageProduct={Special5}
                    productName="Caramel Croissant"  
                    productDes="The flavor of a croissant intensely buttery with a natural dairy sweetness. Each layer of flaky pastry virtually melt on the tongue, but not feel greasy in your hands. an even, golden brown color all around topped with Caramel. LET TRY IT !!!"  
                    productPrice={priceLow} 
                    valuePrice={()=>this.props.addPrice(priceLow)}/>

                <ProductCard 
                    imageProduct={Special7}
                    productName="Cookies Brownies Cups"  
                    productDes="Chocolate chip cookie mix and brownie mix are combined in these doubly delicious Superboss style. LET TRY IT !!!"  
                    productPrice={priceLow} 
                    valuePrice={()=>this.props.addPrice(priceLow)}/>



    		</div>

      	</div>
    );
  }
}

