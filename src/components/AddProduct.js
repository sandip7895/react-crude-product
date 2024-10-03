import React, { useState } from "react";
import products from "../apis/products";

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    color: "",
    department: "",
    description: "",
  });

  const { name, price, color, department, description } = formData;

  const onFormSubmit = async (event) => {
    event.preventDefault();

    const product = {
      name,
      price,
      color,
      department,
      description,
    };

    try {
      const response = await products.post("/products", product);
      // window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form
      className="ui form"
      onSubmit={onFormSubmit}
      style={{ margin: "30px" }}
    >
      <div className="field">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="field">
        <label>Price:</label>
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={price}
          onChange={handleInputChange}
        />
      </div>
      <div className="field">
        <label>Color:</label>
        <input
          type="text"
          name="color"
          placeholder="Color"
          value={color}
          onChange={handleInputChange}
        />
      </div>
      <div className="field">
        <label>Department:</label>
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={department}
          onChange={handleInputChange}
        />
      </div>
      <div className="field">
        <label>Description:</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={handleInputChange}
        />
      </div>
      <button className="ui green button" type="submit">
        Add Product
      </button>
    </form>
  );
}

export default AddProduct;
