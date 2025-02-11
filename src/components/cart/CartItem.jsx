import React from "react";
import { useOutletContext } from "react-router-dom";

const CartItem = (props) => {
    const [cart, setCart] = useOutletContext();
    const name = props.item.name;
    const img = props.item.img;
    const price = props.item.price;
    const amount = props.item.count;

    const removeOne = () => {
        let found;
        cart.forEach((element) => {
            if (element.name === name) {
                found = element;
            }
        });

        let newCart = [...cart];
        const index = newCart.indexOf(found);
        if (index !== -1) {
            newCart.splice(index, 1); // Removes the first instance of the value
        }

        setCart(newCart);
    };

    return (
        <div className="flex flex-row justify-between items-end shadow-sm p-6 self-stretch rounded-md gap-2 hover:bg-gray-100 transition-colors ease-in-out">
            <div className="flex flex-row gap-4">
                <img className="w-48 h-64 object-contain" src={img}></img>
                <div>
                    <p className="text-xl font-bold">${price}</p>
                    <p>{name}</p>
                    <p>Amount: {amount}</p>
                </div>
            </div>
            <button
                className="h-12 p-4 flex justify-center items-center bg-blue-600 rounded-lg text-white hover:opacity-80"
                onClick={() => removeOne(name)}
            >
                Remove one
            </button>
        </div>
    );
};

export default CartItem;
