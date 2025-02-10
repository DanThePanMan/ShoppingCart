import React from "react";
import Navbar from "../components/universal/Navbar";
import { useOutletContext } from "react-router-dom";

const Cart = () => {
    const [cart, setCart] = useOutletContext();
    return (
        <div>
            <Navbar cartCount={cart.length} />
            Cart
        </div>
    );
};

export default Cart;
