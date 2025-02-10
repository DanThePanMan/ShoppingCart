import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/universal/Navbar";

const App = () => {
    const [cart, setCart] = useState([]);
    return (
        <>
            <Outlet context={[cart, setCart]} />
        </>
    );
};

export default App;
