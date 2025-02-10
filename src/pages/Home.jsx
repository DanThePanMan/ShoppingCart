import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "../components/universal/Navbar";
import Item from "../components/home/Item";
import { useItems } from "../hooks/useItems";
import ProductList from "../components/home/ProductList";
import CategorySelect from "../components/home/CategorySelect";

const Home = () => {
    const [cart, setCart] = useOutletContext();
    const [category, setCategory] = useState("all");
    return (
        <>
            <Navbar cartCount={cart.length} />
            <CategorySelect setCategory={setCategory} />
            <div className="flex flex-row justify-center">
                <ProductList category={category} />
            </div>
        </>
    );
};

export default Home;
