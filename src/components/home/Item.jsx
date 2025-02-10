import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Item = (props) => {
    const [cart, setCart] = useOutletContext();
    const [amount, setAmount] = useState(1);
    const name = props.name;
    const img = props.img;
    const price = props.price;
    const rating = props.rating;

    const item = {
        name: name,
        img: img,
        price: price,
    };

    return (
        <div className="flex flex-col shadow-sm p-6 w-60 rounded-md gap-2 hover:bg-gray-100 transition-colors ease-in-out">
            <img className="w-48 h-64 object-contain" src={img}></img>
            <p className="text-xl font-bold">${price}</p>
            <p>{name}</p>
            <p>Rating: {rating}/5.0</p>
            <div className="flex flex-row gap-2 items-center">
                <button
                    className="bg-blue-400 rounded-full w-6 h-6 text-center hover:opacity-80"
                    onClick={() => {
                        setAmount(amount + 1);
                    }}
                    type="button"
                >
                    +
                </button>
                <form>
                    <label htmlFor="amount"></label>
                    <input
                        id="amount"
                        type="number"
                        value={amount}
                        className=" border rounded-sm border-gray-400 p-1 w-8 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        onChange={(event) => setAmount(event.target.value)}
                        min={0}
                    ></input>
                </form>
                <button
                    className="bg-blue-400 rounded-full w-6 h-6 text-center hover:opacity-80"
                    onClick={() => {
                        if (amount != 0) {
                            setAmount(amount - 1);
                        }
                    }}
                    type="button"
                >
                    -
                </button>
            </div>
            <button
                className="bg-blue-500  w-32 p-2 text-white rounded-md hover:opacity-80"
                onClick={() => {
                    const tempArray = [];
                    for (let i = 0; i < amount; i++) {
                        tempArray.push(item);
                    }
                    setCart(cart.concat(tempArray));
                }}
            >
                Add to cart
            </button>
        </div>
    );
};

export default Item;
