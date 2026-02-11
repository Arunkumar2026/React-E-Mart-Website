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
                <Link to='/books'>
                    <li>Books</li>
                </Link>
                <Link to='/furniture'>
                    <li>Furniture</li>
                </Link>
                <Link to='/kitchen'>
                    <li>Kitchen</li>
                </Link>
                <Link to='/fridge'>
                    <li>Fridge</li>
                </Link>
                <Link to='/speakers'>
                    <li>Speakers</li>
                </Link>
                <Link to='/ac'>
                    <li>Ac</li>
                </Link>
                <Link to='/tv'>
                    <li>TV's</li>
                </Link>
            </ul>
        </div>
    </>
  )
}

export default Navbar 