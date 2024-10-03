import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../apis/products";

function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    color: "",
    department: "",
    description: "",
  });

  useEffect(() => {
    products.get(`/products/${id}`).then((response) => {
      const productData = response.data;
      setProduct(productData);
    });
  }, [id]);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const updatedProduct = {
      name: product.name,
      price: product.price,
      color: product.color,
      department: product.department,
      description: product.description,
    };

    products
      .put(`/products/${id}`, updatedProduct)
      .then((res) => {
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <form
      className="ui form"
      onSubmit={onFormSubmit}
      style={{ margin: "20px" }}
    >
      <div className="field">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={product.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="field">
        <label>Price:</label>
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleInputChange}
        />
      </div>
      <div className="field">
        <label>Color:</label>
        <input
          type="text"
          name="color"
          placeholder="Color"
          value={product.color}
          onChange={handleInputChange}
        />
      </div>
      <div className="field">
        <label>Department:</label>
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={product.department}
          onChange={handleInputChange}
        />
      </div>
      <div className="field">
        <label>Description:</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleInputChange}
        />
      </div>
      <button className="ui green button" type="submit">
        Update Product
      </button>
    </form>
  );
}

export default EditProduct;
