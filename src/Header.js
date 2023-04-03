import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LooksIcon from '@mui/icons-material/Looks';
import SearchIcon from '@mui/icons-material/Search';
import Login from "./Login";


function Header() {
    return (
        <div className="header">

          <div className="header_logo">
            <LooksIcon className="header_logoImage" fontSize="large"/>
            <h2 className="header_logoTitle">All Things Rainbow Shop</h2>
          </div>

          <div className="header_search">
            <SearchIcon className="header_searcIcon"/>
            <input type="text" className="header_searchInput" />
          </div>  

          <div className="header_nav">
            <div to="/Login">
                <div className="nav_item">
                <span className="nav_itemLineTwo">Sign In</span>
                </div>
            </div>
          </div>

          <div className="nav_item">
              <span className="nav_itemLineTwo">Shop</span>
          </div>

          <div className="nav_itemBasket">
              <ShoppingBasketIcon />
              <span className="nav_itemLineTwo nav_basketCount">0</span>
          </div>

        </div>
      );
}

export default Header