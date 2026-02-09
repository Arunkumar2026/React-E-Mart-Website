import React from 'react'

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
                <li>Mobiles</li>
                <li>Computers</li>
                <li>Watches</li>
                <li>Mens Wear</li>
                <li>Woman Wear</li>
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