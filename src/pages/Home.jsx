import React from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "../components/universal/Navbar";

const Home = () => {
    const [cart, setCart] = useOutletContext();
    return (
        <div
            className=""
            onClick={() => {
                setCart(["a", "a"]);
            }}
        >
            <Navbar cartCount={cart.length} />
            Home
        </div>
    );
};

export default Home;
