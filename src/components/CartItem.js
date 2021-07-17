import React from 'react'
import '../css/cartitem.css';
import { UseStateValue } from '../StateProvider';

function CartItem({id, title, price, rating, img}) {
    const[{basket}, dispatch] = UseStateValue();

    // const removeFromBasket = () => {
    //     dispatch({
    //         type: "REMOVE_FROM_BASKET",
    //         item: {
    //             id: id,
    //             title: title,
    //             price: price,
    //             rating: rating,
    //             img: img
    //         }
    //     });
    // }

    return (
        <div className="cart_item">
            <img className="cartitem_image" src={img}/>
            <div className="cartitem_info">
                <p className="cartitem_title">{title}</p>
                <p className="cartitem_price"><small>Rs.</small><strong>{price}</strong></p>
                <div className="cartitem_rating">
                    {
                        Array(rating).fill().map((_, i) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
                <button>
                    Remove from basket
                </button>
            </div>
        </div>
    )
}

export default CartItem
