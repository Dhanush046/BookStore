import React, { useState } from "react";
import { PRODUCTS } from "../../product";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  const [visibleProducts, setVisibleProducts] = useState(9);
  const totalProducts = PRODUCTS.length;

  const loadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 9);
  };

  return (
    <div className="shop">
      <div className="shopTitle">
        <h2>List of Books</h2>
      </div>

      <div className="products">
        {PRODUCTS.slice(0, visibleProducts).map((product) => (
          <Product data={product} />
        ))}
      </div>

      {visibleProducts < totalProducts && (
        <div className="loadMore">
          <button onClick={loadMore}>Load More</button>
        </div>
      )}
    </div>
  );
};
