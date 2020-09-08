import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';



function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" alt="" src="https://jordantravers.com/wp-content/uploads/2018/10/Amazon-Logo-1024x373.png" />
            </Link>

            <div className="header__search">
                <input
                    type="text"
                    className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">

                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Signin</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineOne header__basketCount">
                            0
                        </span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
