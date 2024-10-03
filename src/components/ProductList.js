import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import products from "../apis/products";
import { Link } from "react-router-dom";

function ProductList() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    products.get("/products").then((response) => {
      const productsData = response.data;

      setProductsList(productsData);
    });
  }, []);

  const handleDelete = (id) => {
    products.delete(`/products/${id}`).then(() => {
      const updatedProductsList = productsList.filter(
        (item) => item.id !== id
      );
      setProductsList(updatedProductsList);
    });
  };

  const renderedProducts = productsList.map((product) => (
    <div key={product.id}>
      <br />
      <ProductCard product={product} />
      <Link to={`/editproduct/${product.id}`}>
        <button className="positive ui button">Edit</button>
      </Link>
      <button
        onClick={() => {
          handleDelete(product.id);
        }}
        className="negative ui button"
      >
        Delete
      </button>
      <div className=" ui divider"></div>
    </div>
  ));

  return (
    <div>
      <div className="ui center aligned container">
        <h1>Product List:</h1>
        {renderedProducts}
      </div>
    </div>
  );
}

export default ProductList;
