import React from "react";
import Navbar from "../components/universal/Navbar";

const Cart = () => {
    return (
        <div>
            <Navbar cartCount={cart.length} />
            Cart
        </div>
    );
};

export default Cart;
