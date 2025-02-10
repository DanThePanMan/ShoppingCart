import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/universal/Navbar";

const ErrorPage = () => {
    return (
        <>
            <Navbar cartCount={cart.length} />
            <div className="w-[100%] flex flex-col justify-center items-center text-3xl gap-12 mt-32">
                404 error, click to return to home
                <button className="bg-blue-600 text-yellow-300 rounded-sm p-4 hover:bg-blue-800 text-lg font-bold">
                    <Link to="/">Home</Link>
                </button>
            </div>
        </>
    );
};

export default ErrorPage;
