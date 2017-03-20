import React, { Component } from 'react';
import Food1 from './images/food1.jpg';
import Food6 from './images/food6.JPG';
import {Provider} from "react-redux";
import Bgburger from './images/bgburger.jpg';
import {ProductCard} from './Component/ProductCard';
import Burger1 from './images/burger1.png';
import Burger2 from './images/burger2.png';
import Burger3 from './images/burger3.png';
import Burger4 from './images/burger4.png';
import Burger5 from './images/burger5.png';
import Burger6 from './images/burger6.png';
import Burger7 from './images/burger7.png';
import Burger8 from './images/burger8.png';

export class Burgar extends Component {
  state = {
    priceLow:89,
    priceMedium:129,
    priceHigh:149,
    priceSuper:179,
    priceExtra:189
  } 
  render() {
    let {priceLow , priceMedium , priceHigh , priceSuper , priceExtra} = this.state;
    return (
        <div className="container-fluid paddingTopLarge fadeIn animated">
    		<div className="container paddingTopMedium">
        		<img src={Bgburger} alt="food" />
                <ProductCard 
                    imageProduct={Burger1}
                    productName="Ham Extra Long Bossburger"  
                    productDes="Fired chicken topped with freshly cut onions, Ham, melted American cheese, and a creamy mayonnaise spread all served on a warm toasted hoagie bun."  
                    productPrice={priceMedium} 
                    valuePrice={()=>this.props.addPrice(priceMedium)}/>
                <ProductCard 
                    imageProduct={Burger2}
                    productName="Superboss Cheese Burger"  
                    productDes="Chicken thigh fillet coasted in Superboss flavoring combined with freshly cut onions, lettuce, creamy mayonnaise spread,mayo and melted American Cheese !!!"  
                    productPrice={priceHigh} 
                    valuePrice={()=>this.props.addPrice(priceHigh)}/>
                <ProductCard 
                    imageProduct={Burger3}
                    productName="Homestyle Bossburger"  
                    productDes="Fired chicken topped with freshly cut onions, lettuce, crunchy pickles, mayo and ketchup on a soft sesame seed bun."  
                    productPrice={priceLow} 
                    valuePrice={()=>this.props.addPrice(priceLow)}/>
                <ProductCard 
                    imageProduct={Burger4}
                    productName="Double Bossburger"  
                    productDes="Fired chicken topped with juicy tomatoes, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun"  
                    productPrice={priceHigh} 
                    valuePrice={()=>this.props.addPrice(priceHigh)}/>
                                    <ProductCard 
                    imageProduct={Burger5}
                    productName="BBQ Bacon Bossburger Special"  
                    productDes="Featuring two ¼ lb* savory flame-grilled beef patties, topped with a hearty portion of thick-cut smoked bacon, melted American cheese, creamy mayonnaise, and finished off with a hefty portion of BBQ sauce, all on our signature sesame seed bun."  
                    productPrice={priceSuper} 
                    valuePrice={()=>this.props.addPrice(priceSuper)}/>
                <ProductCard 
                    imageProduct={Burger6}
                    productName="Bacon and Cheese Extra Bossburger"  
                    productDes="A ¼ lb.* of savory flame-grilled beef topped with thick-cut smoked bacon, melted American cheese, ripe tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun."  
                    productPrice={priceExtra} 
                    valuePrice={()=>this.props.addPrice(priceExtra)}/>
                <ProductCard 
                    imageProduct={Burger7}
                    productName="Double Bacon Bossburger"  
                    productDes="Two ¼ lb* savory flame-grilled beef patties, topped a with hearty portion of thick-cut smoked bacon, melted American cheese and topped with ketchup all on a soft sesame seed bun."  
                    productPrice={priceSuper} 
                    valuePrice={()=>this.props.addPrice(priceSuper)}/>
                <ProductCard 
                    imageProduct={Burger8}
                    productName="Bacon Double Cheeseburger"  
                    productDes="Two signature flame-grilled beef patties topped with smoked bacon and a simple layer of melted American cheese, crinkle cut pickles, and ketchup on a toasted sesame seed bun."  
                    productPrice={priceSuper} 
                    valuePrice={()=>this.props.addPrice(priceSuper)}/>



    		</div>

      	</div>
    );
  }
}

