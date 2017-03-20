import React, { Component } from 'react';
import Food1 from './images/food1.jpg';
import Food2 from './images/food2.jpg';
import {Provider} from "react-redux";
import {ProductCard} from './Component/ProductCard';
import superboss1 from'./images/superboss1.png';
import Bgwarter from './images/bgwarter.jpg';
import Water1 from'./images/water.png';
import Water2 from'./images/water2.png';
import Water3 from'./images/water3.png';
import Water4 from'./images/water4.png';
import Water5 from'./images/water5.png';
export class GroupMeal extends Component {
  state = {
    priceLow:38,
    priceMedium:79,
    priceHigh:129,
    priceSuper:199,
    overabundantly:975
  } 
  render() {
    let {priceLow , priceMedium , priceHigh , priceSuper,overabundantly} = this.state;
    return (
        <div className="container-fluid paddingTopLarge fadeIn animated">
    		<div className="container paddingTopMedium">
        		<img src={Bgwarter} alt="food" />
                <ProductCard 
                    imageProduct={Water1}
                    productName="Wine"  
                    productDes="This variety come with outstanding softness with bright red color and soft tannin, It's always a little astringent. And the dominant fruit flavor"  
                    productPrice={overabundantly} 
                    valuePrice={()=>this.props.addPrice(overabundantly)}/>

                    <ProductCard 
                    imageProduct={Water2}
                    productName="White Wine"  
                    productDes="Chardonnay have been referred Queen of the grapes , Chardonnay is great with creamy cheese, white meat, chicken, mushrooms and cream sauce."  
                    productPrice={overabundantly} 
                    valuePrice={()=>this.props.addPrice(overabundantly)}/>

                    <ProductCard 
                    imageProduct={Water4}
                    productName="Superboss RedBeer"  
                    productDes="Superboss RedBeer is moderately bitter , smooth beer that anyone from a first-time drinker to a beer connoisseur can enjoy. "  
                    productPrice={priceHigh} 
                    valuePrice={()=>this.props.addPrice(priceHigh)}/>

                    <ProductCard 
                    imageProduct={Water5}
                    productName="Superboss Beer"  
                    productDes="Superboss Beer is the only white beer of its style on the Belgian market and has some flavors of coriander and citrus peels."  
                    productPrice={priceHigh} 
                    valuePrice={()=>this.props.addPrice(priceHigh)}/>
                    
                    <ProductCard 
                    imageProduct={Water3}
                    productName="Soda Water"  
                    productDes="When life hands soda,put them in a glass and say,'Thanks, life!'and drink up because everybody loves refreshing Soda Water."  
                    productPrice={ priceMedium} 
                    valuePrice={()=>this.props.addPrice( priceMedium)}/>
                

    		</div>

      	</div>
    );
  }
}

