import React from 'react'
import CartItem from '../components/CartItem';
import SubTotal from '../components/SubTotal';
import '../css/cart.css';
import { UseStateValue } from '../StateProvider';

function Cart() {
    const[{basket}, dispatch] = UseStateValue();
    
    return (
        <div className="cart"> 
            <div className="cart_left">
                <img className="cart_top_img" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
                <h2 className="cart_top_text">Your shopping cart</h2>
                {
                    basket?.map((item) => {
                        return(<CartItem 
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            img={item.img}/>)
                    })
                }
            </div>

            <div className="cart_right">
                <SubTotal />
            </div>
        </div>
    )
}
 export default Cart
