import React from "react";
import Navbar from "../components/universal/Navbar";
import { useOutletContext } from "react-router-dom";
import CartItem from "../components/cart/CartItem";

const Cart = () => {
    const [cart, setCart] = useOutletContext();

    function removeDuplicatesAndCount(arr) {
        const result = [];
        const seen = new Map(); // Map to store counts by a unique key (using object properties)

        arr.forEach((item) => {
            const key = item.name; // Use a unique property (name) as a key

            if (!seen.has(key)) {
                // If we haven't seen this item, add it to result with count 1
                result.push({ ...item, count: 1 });
                seen.set(key, 1); // Set the count in the map
            } else {
                // If the item is already in the result, increase the count
                const existingItem = result.find((el) => el.name === key); // Compare based on 'name'
                if (existingItem) {
                    existingItem.count++; // Increment the count
                }
                seen.set(key, seen.get(key) + 1); // Update count in the map
            }
        });

        return result;
    }

    const dupeCart = removeDuplicatesAndCount(cart);

    return (
        <div>
            <Navbar cartCount={cart.length} />
            <div className="flex flex-col justify-center items-center w-[100%] p-12">
                <div className="flex flex-col justify-start items-start w-[60%] gap-4">
                    <h1>Your Cart:</h1>
                    {cart.length == 0 ? (
                        <div className="h-64 w-[100%] flex justify-center items-center bg">
                            No items in cart
                        </div>
                    ) : (
                        dupeCart.map((item) => {
                            return (
                                <CartItem key={item.name} item={item}>
                                    {item.name}
                                </CartItem>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
