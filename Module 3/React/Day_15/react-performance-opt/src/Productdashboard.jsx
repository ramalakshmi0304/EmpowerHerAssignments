import React, { useCallback, useState,useMemo } from "react";
import ProductList from "./ProductList";

const products = [
    { id: 1, name: "Apple", price: 100 },
    { id: 2, name: "Banana", price: 50 },
    { id: 3, name: "Orange", price: 80 },
];

function Productdashboard() {
    const [counter, setCounter] = useState(0);

    const totalPrice = useMemo(() => {
        return products.reduce((sum, p) => sum + p.price, 0)
    }, [products])

    const handleSelectProduct = useCallback((product) => {
        console.log("Selected:", product.name);
    }, []);

    return (
        <div>
            <h2>Total Price: {totalPrice}</h2>

            <button onClick={() => setCounter(counter + 1)}>
                Counter: {counter}
            </button>

            <ProductList
                products={products}
                onSelect={handleSelectProduct}
            />
        </div>
    );
}

export default Productdashboard;
