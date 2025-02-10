import React from "react";

const CategorySelect = (props) => {
    const setCategory = props.setCategory;

    return (
        <div className="flex flex-row justify-center items-center gap-12 h-12 bg-gray-200">
            <button
                className="hover:text-blue-500"
                onClick={() => setCategory("all")}
            >
                All
            </button>
            <button
                className="hover:text-blue-500"
                onClick={() => setCategory("men's clothing")}
            >
                Men's Clothing
            </button>
            <button
                className="hover:text-blue-500"
                onClick={() => setCategory("women's clothing")}
            >
                Woman's Clothing
            </button>
            <button
                className="hover:text-blue-500"
                onClick={() => setCategory("electronics")}
            >
                Electronics
            </button>
            <button
                className="hover:text-blue-500"
                onClick={() => setCategory("jewelery")}
            >
                Jewlery
            </button>
        </div>
    );
};

export default CategorySelect;
