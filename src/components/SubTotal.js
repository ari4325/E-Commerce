import React from 'react'
import CurrencyFormat from 'react-currency-format';
import '../css/cart.css'
import { UseStateValue } from '../StateProvider';
import { getBasketValue } from '../reducer';

function SubTotal() {
    const[{basket}, dispatch] = UseStateValue();

    var format = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2,
    });

    return (
        <div className="subtotal">
            <div>
                <p>
                    SubTotal ({basket?.length} items): <strong>{format.format(getBasketValue(basket))}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox"/>
                    This order contains a gift
                </small>
            </div>

           <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal;
