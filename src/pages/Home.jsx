import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "../components/universal/Navbar";
import Item from "../components/home/Item";
import { useItems } from "../hooks/useItems";
import ProductList from "../components/home/ProductList";

const Home = () => {
    const [cart, setCart] = useOutletContext();
    return (
        <>
            <Navbar cartCount={cart.length} />
            <div
                className="p-4"
                onClick={() => {
                    setCart(["a", "a"]);
                }}
            >
                <ProductList />
                Home
                <Item />
            </div>
        </>
    );
};

export default Home;
