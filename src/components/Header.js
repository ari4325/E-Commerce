import React from 'react'
import '../css/header.css';
import logo from '../res/amazon.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { UseStateValue } from '../StateProvider';

function Header() {
    const[{basket}, dispatch] = UseStateValue();

    return (
        <div className="header">
            
            <Link to="/">
                <img src={logo} className="header_logo"/>
            </Link>

            <div className="header_search">
                <input className="header_search_box" type="text" placeholder="Search for over 100 different products"/>
                <SearchIcon className="header_search_icon"/>
            </div>
        
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_line1">Hello</span>
                    <span className="header_line2">Your account</span>
                </div>

                <div className="header_option">
                    <span className="header_line1">Your</span>
                    <span className="header_line2">Orders</span>
                </div>
            </div>

            <Link to="/cart">
                <div className="header_cart">
                    <ShoppingBasketIcon className="shopping_basket"/>
                    <span className="option_line2 cart_items">{basket?.length}</span>
                </div>
            </Link>
            
        </div>
    )
}

export default Header
