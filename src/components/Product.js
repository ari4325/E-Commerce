import React from 'react'
import '../css/product.css';
import { UseStateValue } from '../StateProvider';

function Product({id, title, price, rating, img}) {
    const[state, dispatch] = UseStateValue();

    const add_to_basket = (event) => {
        event.preventDefault();

        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                img: img
            }
        });
    }

    return (
        <div className="product">
            <p className="product_text">{title}</p>
            <p className="product_text">
                <small>Rs. </small>
                <strong>{price}/-</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))
                }
            </div>
            <img className="product_image" src={img}/>
            <button className="add_to_basket" onClick={add_to_basket}>Add to Basket</button>
        </div>
    )
}

export default Product
