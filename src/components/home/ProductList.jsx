import React from "react";
import { useItems } from "../../hooks/useItems";
import Item from "./Item";

const ProductList = () => {
    const { products, isLoading, isError } = useItems();

    if (isLoading) {
        return <div>Loading</div>;
    } else if (isError) {
        return <div>Error loading the page</div>;
    } else {
        return (
            <div className="flex flex-row flex-wrap">
                {products.map((product) => {
                    return (
                        <Item
                            key={product.id}
                            name={product.title}
                            desc={product.description}
                            img={product.image}
                            price={product.price}
                            rating={product.rating.rate}
                        />
                    );
                })}
            </div>
        );
    }
};

export default ProductList;
