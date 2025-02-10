import React from "react";
import Navbar from "../components/universal/Navbar";
import { useOutletContext } from "react-router-dom";

const Cart = () => {
    const [cart, setCart] = useOutletContext();

    return (
        <div>
            <Navbar cartCount={cart.length} />
            {cart.map((item) => {
                return <div key={crypto.randomUUID}>{item.name}</div>;
            })}
        </div>
    );
};

export default Cart;
