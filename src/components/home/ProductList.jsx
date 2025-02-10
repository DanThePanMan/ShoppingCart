import React from "react";
import { useItems } from "../../hooks/useItems";
import Item from "./Item";

const ProductList = (props) => {
    const category = props.category;
    const { products, isLoading, isError } = useItems();

    if (isLoading) {
        return <div>Loading</div>;
    } else if (isError) {
        return <div>Error loading the page</div>;
    } else {
        return (
            <div className="flex flex-row flex-wrap gap-4 p-2 w-[80vw] justify-between ">
                {products.map((product) => {
                    if (product.category === category || category === "all") {
                        return (
                            <Item
                                key={product.id}
                                name={product.title}
                                img={product.image}
                                price={product.price}
                                rating={product.rating.rate}
                            />
                        );
                    }
                })}
            </div>
        );
    }
};

export default ProductList;
