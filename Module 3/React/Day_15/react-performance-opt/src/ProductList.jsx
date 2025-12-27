import React from "react";

function ProductList({ products, onSelect }) {
  console.log("ProductList rendered");

  return (
    <ul>
      {products.map ((product)=>(
       <li key={product.id} onClick={()=>onSelect(product)}>
        {product.name}- ₹{product.price}</li>
      ))}
    </ul>
  );
}

export default ProductList;


