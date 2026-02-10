import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <div className="navSection">
            <div className="title">
                <h2>E-Mart</h2>
            </div>
            <div className="search">
                <input type="text" placeholder='Search...' />
            </div>
            <div className="user">
                <div className="user-detail">
                    SignIN/SignUp 
                </div>
                <div className="cart">
                    Cart
                </div>
            </div>
        </div>
        <div className="subMenu">
            <ul>
                <Link to='/mobiles'>
                    <li>Mobiles</li>
                </Link>
                <Link to='/computers'>
                    <li>Computers</li>
                </Link>
                <Link to='/watches'>
                    <li>Watches</li>
                </Link>
                <Link to='/menswear'>
                    <li>Mens Wear</li>
                </Link>
                <Link to='/womanwear'>
                    <li>Woman Wear</li>
                </Link>
                <li>Books</li>
                <li>Furniture</li>
                <li>Kitchen</li>
                <li>Fridge</li>
                <li>Speakers</li>
                <li>Ac</li>
                <li>TV's</li>
            </ul>
        </div>
    </>
  )
}

export default Navbar 