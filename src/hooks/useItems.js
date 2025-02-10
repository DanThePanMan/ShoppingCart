import { useState, useEffect } from "react";

const useItems = () => {
    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    //fetch items from api
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then((res) => {
                if (res.status >= 400) {
                    throw new Error("Server error");
                }
                return res.json();
            })
            .then((items) => {
                setProducts(items);
            })
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, []);

    return { products, isLoading, isError };
};

export { useItems };
