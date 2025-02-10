import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    const cartCount = props.cartCount;
    return (
        <div className="navbar w-[100%] bg-blue-700 p-2 text-yellow-300 font-bold text-2xl flex flex-row justify-between items-center">
            BestestBuy
            <div className="flex flex-row justify-between items-center text-lg p-2 gap-2">
                <p>{cartCount} items in cart</p>
                <button className="text-yellow-300 rounded-sm p-4 hover:bg-blue-800">
                    <Link to="/">Home</Link>
                </button>
                <button className="text-yellow-300 rounded-sm p-4 hover:bg-blue-800">
                    <Link to="cart">Cart</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
